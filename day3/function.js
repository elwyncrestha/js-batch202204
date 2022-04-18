function printFullName() {
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);
}

const printEmployee = printFullName.bind({
    firstName: 'John',
    lastName: 'Doe'
});
printEmployee();
