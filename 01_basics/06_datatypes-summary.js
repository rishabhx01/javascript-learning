// Datatypes summary for Interviews.

// All datatypes and categories are divided in two parts in javascript.

// First Primitive and other all are Non-Primitive.
/* The difference lies is how you store your data in memory and how you access that data. This is the basis and
   on this basis there are two types - Primitive and Non-Primitive. */

   
// Primitive Data Types :
/* (They are call by value means whenever you are using them you do not work on the 
    original datatype you work on copied version of that datatype.) */

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Symbol => kisi bhi value ko unique bnane k liye symbol use hota hai.
// BigInt => scientific values or very big values that are not covered in number are comes under BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567812456n

// Non-Primitive Data Types or Reference Type :
/* These types are stored as references to memory locations, rather than directly holding the value in the variable. */

// Objects, Arrays and Functions.

const heros = ["Ironman", "Batman", "Spiderman"];  // Array


let myObj = {                                       // Objects .. we write objects in key: value pair.
    name: "Rishabh",
    age:22
}

const myFunction = function(){                     // Functions
    console.log("Hello world");
}


// Que - Is JavaScript statically typed or dynamically typed ?

// The typeof Operator :

console.log(typeof score);          // Output - number
console.log(typeof scoreValue);     // Output - number
console.log(typeof isLoggedIn);     // Output - boolean
console.log(typeof outsideTemp);    // Output - object
console.log(typeof userEmail);     // Output - undefined
console.log(typeof id);            // Output - symbol
console.log(typeof bigNumber);     // Output - bigint


// typeof For Non-Primitive

console.log(typeof heros);        // Output - Object 
console.log(typeof myObj);        // Output - Object
console.log(typeof myFunction);   // Output - function ,, we say this object function 

// https://262.ecma-international.org/5.1/#sec-11.4.3 .. read this article.


