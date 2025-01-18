/***************************************************** Numbers ****************************************************************/

const score = 55
console.log(score);

const balance = new Number(100) // here we have explicitly defined that balance is a Number type datatype by using new keyword.
console.log(balance);           // Output - [Number: 100]

// Properties / Methods of Numbers : .. you can check all this in console.

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));  // Output - 23.9

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3));  // Output - 124

const otherNumber2 = 123.8966
console.log(otherNumber2.toPrecision(4));   // Output - 123.9


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

/**************************************************** Maths *********************************************************************/

console.log("Let's Study about Math Library in JavaScript");

// Properties / Methods of Math : .. you can check all this in console.

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


console.log(Math.random()); // always gives value between 0 to 1.

// For Dice game we want value from 1 to 6 ... think like that how you can make use of random.
console.log((Math.random()*6) + 1);

console.log(Math.floor(Math.random()*6) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // important and detailed concept.

// Lecture - 12 Done :)