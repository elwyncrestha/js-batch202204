const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    address: {
        street: 'Freak Street',
        city: 'Kathmandu',
        country: 'Nepal'
    }
}

const jsonString = JSON.stringify(person);
console.log(jsonString);

const personObj = JSON.parse(jsonString);
console.log(personObj);
