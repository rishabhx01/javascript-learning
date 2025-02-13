// Prototype, Methods and Prototype Chaining we will study later. 
// But you can check this in by going in inspect.. 

/*
When you inspect an array in JavaScript, you see a bunch of methods attached to it. 
These methods come from prototypes.

Array Prototype (Array.prototype)
Every array in JavaScript gets its methods (like push, pop, map, filter, etc.) from Array.prototype. 
These are built-in functions that allow you to manipulate arrays.
*/

/*
Object Prototype (Object.prototype)
If you keep going up the chain, you’ll reach Object.prototype.
This is because all arrays are also objects in JavaScript.

Object.prototype has methods like:
toString()
valueOf()
hasOwnProperty()
*/

const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)              // Output - [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// here it [ 'superman', 'flash', 'batman' ] this as 4th element          // Array in Array

// console.log(marvel_heros[3][1]);       // Output - flash

// So this is not a good way for merging.

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);                             // Output - [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

// push .. pushes element on the existing array but concat return new array.
// Concat - Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// Concept of spread
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);                           // Output - [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Infinity used for finding the depth of an array 
console.log(real_another_array);                  // Output - [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("Rishabh"))  // here we are asking is this an array ?
// Output - false

console.log(Array.from("Rishabh"))    // whatever value you will give it will convert it into Array.
// Output - [ 'R', 'i', 's', 'h', 'a', 'b', 'h' ]
// We use this while data scrapping

console.log(Array.from({name: "Rishabh"})) // Interesting Case for interviews
// Output - []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));        // Output - [ 100, 200, 300 ]
// Array.of - Returns a new array from a set of elements


// Read about isArray, Array.from, Array.of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


