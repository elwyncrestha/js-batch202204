function printName(name) {
    if (!name) {
        throw Error('Name not found!');
    }

    console.log(name);
}

try {
    printName();
} catch (err) {
    console.log('Error while printing the name: ', err);
} finally {
    console.log('Finally block executed!');
}
