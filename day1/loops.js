const peoples = ['John', 'Jack', 'Jane', 'Marry'];

// for
for (let i = 0; i < peoples.length; i++) {
    console.log(peoples[i]);
}

// while
while (peoples.length > 0) {
    console.log(peoples.pop());
}

console.log(peoples);
peoples.push('John', 'Jack', 'Jane', 'Marry');

// do while
do {
    console.log(peoples.shift());
} while (peoples.length > 2);

for (let people of peoples) {
    console.log(people);
}

for (let keys in { name: 'John', age: 24 }) {
    console.log(keys);
}
