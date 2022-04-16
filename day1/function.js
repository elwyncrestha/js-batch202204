// fn with no parameter and no return
function greet() {
    console.log('Hello everyone!');
}

// fn with parameter and no return
function greetPerson(name) {
    console.log(`Hello ${name}!`);
}

// fn with parameter and return
function getAge(year) {
    const today = new Date();
    return today.getFullYear() - year;
}

// fn with no parameter and return
function greetStranger() {
    return 'everyone';
}

greet();
greetPerson('John Doe');
console.log(getAge(2010));
greetPerson(greetStranger());
