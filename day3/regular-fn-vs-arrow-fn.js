// regular function
const location = {
    city: 'Kathmandu',
    country: 'Nepal',
    print: function () {
        console.log(arguments);
        console.log(`${this.city}, ${this.country}`);
    }
}

location.print(123);

// arrow function
const location1 = {
    city: 'Kathmandu',
    country: 'Nepal',
    print: () => {
        console.log(arguments);
        console.log(`${this.city}, ${this.country}`)
    }
}

location1.print(123);
