function printFullName() {
    console.log(arguments);
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);
}

printFullName.call({
    firstName: 'John',
    lastName: 'Doe'
}, 'other', 'params', 'if', 'required');

printFullName.apply({
    firstName: 'John',
    lastName: 'Doe'
}, ['other', 'params', 'if', 'required']);

const printEmployee = printFullName.bind({
    firstName: 'John',
    lastName: 'Doe'
}, 'other', 'params', 'if', 'required');
printEmployee();
