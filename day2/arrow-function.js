// fn with no parameter and no return
greet = () => console.log('Hello everyone!');
greet();

// fn with parameter and no return
greetPerson = (name) => console.log(`Hello ${name}!`);
greetPerson('John Doe');

// fn with parameter and return
getAge = (year) => {
    const today = new Date();
    return today.getFullYear() - year;
}
console.log(getAge(2010));

// fn with no parameter and return
greetStranger = () => 'everyone';
greetPerson(greetStranger());
