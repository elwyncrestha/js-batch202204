let flag = false;

// if-else
if (flag) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}

// if-else if-else
flag = null;

if (flag) {
    console.log('Truthy');
} else if (flag === undefined) {
    console.log('Not defined');
} else if (flag === null) {
    console.log('Is null');
} else {
    console.log('Falsy');
}

// switch
switch ('JS') {
    case 'Python':
        console.log('Python');
        break;
    case 'JS':
        console.log('JavaScript');
        break;
    default:
        console.log('Default');
}

// ternary operator
console.log(true ? 'Truthy': 'Falsy');
console.log(0 ? 'Truthy': 'Falsy');
console.log('Some Value' ? 'Truthy': 'Falsy');


// AND | OR
console.log('Some Value' || 'Default Value');
console.log(null || 'Default Value');
console.log(undefined || 'Default Value');

console.log('Some Value' && 'Default Value');
console.log(null && 'Default Value');
console.log(undefined && 'Default Value');
