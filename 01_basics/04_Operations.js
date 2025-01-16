// **************************************************** Operations ***********************************************************

let value = 7
let negValue = -value
// console.log(negValue);

/*
console.log(6+6);
console.log(6-6);
console.log(6*6);
console.log(2**3);
console.log(5/2);
console.log(5%2); // % => Modulus Operator gives remainder so output is 1.
*/

let str1 = "hello"
let str2 = " rishabh"

let str3 = str1 + str2
console.log(str3);


// Special Type Conversions :

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Tricky Conversion :

console.log(true);
console.log(+true);
console.log(+"");     // this all things are from operator precendence topic. Read that..



let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let yearCounter = 100
++yearCounter;
console.log(yearCounter);

/* Here you are not able to tell the difference between gameCounter++ and ++yearCounter 
they both are doing the same thing excedding value of 100 by 1.
but "Predence Operator" (prefix and postfix) there is a difference. Read this on js mdn */

// Link to study :
// https://tc39.es/ecma262/#sec-type-conversion

