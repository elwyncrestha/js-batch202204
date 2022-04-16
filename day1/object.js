const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    age: 24,
    address: {
        street: 'Freak Street',
        city: 'Kathmandu',
        country: 'Nepal'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
console.log(person.age);
console.log(person.address);
console.log(person.address.street);
console.log(Object.keys(person));
console.log(Object.values(person));
