// string to number
const string1 = '123.45';

const toNum1 = Number(string1);
console.log(toNum1);
console.log(typeof toNum1);

const toNum2 = parseInt(string1);
console.log(toNum2);
console.log(typeof toNum2);

const toNum3 = parseFloat(string1);
console.log(toNum3);
console.log(typeof toNum3);

const toNum4 = +string1;
console.log(toNum4);
console.log(typeof toNum4);

// number to string
const num1 = 123.45;

const toString1 = String(num1);
console.log(toString1);
console.log(typeof toString1);

const toString2 = num1.toString();
console.log(toString2);
console.log(typeof toString2);

// date to number
const date1 = new Date();

const toDateNum1 = Number(date1);
console.log(toDateNum1);
console.log(typeof toDateNum1);

const toDateNum2 = date1.getTime();
console.log(toDateNum2);
console.log(typeof toDateNum2);

// number to date
const num2 = 1650034587158;
const toDate1 = new Date(num2);
console.log(toDate1);
console.log(typeof toDate1);

// date to string
const toDateString1 = String(date1);
console.log(toDateString1);
console.log(typeof toDateString1);

const toDateString2 = date1.toString();
console.log(toDateString2);
console.log(typeof toDateString2);

// string to date
const dateString1 = '2022/04/15';
const toDateObj1 = new Date(dateString1);
console.log(toDateObj1);
console.log(typeof toDateObj1);

// boolean to number
console.log(Number(false));
console.log(Number(true));

// number to boolean
console.log(Boolean(0));
console.log(Boolean(1));

// boolean to string
const bool1 = false;
const bool2 = true;

const toBoolString1 = String(bool1);
const toBoolString2 = String(bool1);
console.log(toBoolString1);
console.log(typeof toBoolString1);
console.log(toBoolString2);
console.log(typeof toBoolString2);

const toBoolString3 = bool1.toString();
const toBoolString4 = bool2.toString();
console.log(toBoolString3);
console.log(typeof toBoolString3);
console.log(toBoolString4);
console.log(typeof toBoolString4);
