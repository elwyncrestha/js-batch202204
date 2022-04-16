const str1 = 'JavaScript Language';

console.log(str1.length);
console.log(str1.charAt(3));
console.log(str1.concat(' is', ' awesome'));
console.log(str1.endsWith('Language'));
console.log(str1.toLowerCase().includes('java'));
console.log(str1.indexOf('a'));
console.log(str1.lastIndexOf('a'));
console.log(str1.replace('Language', 'Programming Language'));
console.log(str1.slice(str1.indexOf('Language'), str1.indexOf('Language') + 4));
console.log(str1.split(' '));
console.log(str1.split(' ').join(' 😎 '));