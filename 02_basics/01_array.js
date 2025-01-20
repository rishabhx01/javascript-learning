// Array 

const myArr = [0, 1, 2, 3, 4, 5]

// It enables storing a collection of multiple items under a single variable name.
// We write in square braces [].
// Array, Objects and Functions are Non-Primitive.
// JavaScript arrays are resizable, means (after declaring arrays, also you can add more elements to it.) 
// It can contain a mix of different data types.


// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes.
// means :
console.log(myArr[2]);  // This is the way of accessing an element of the array.

// arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on.
// JavaScript array-copy operations create shallow copies. // Read about shallow copies in Documentation.

// Ways of Declaring Arrays :

const myHeros = ["Ironman", "Batman", "Spiderman", "Hulk", "Captain-America", "Thor"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// In array we also get access to prototype .. you can check it in console.

// Length Property 

console.log(myHeros.length);    // Output - 6


// Array Methods :

const myArray = [0, 1, 2, 3, 4, 5]

myArray.push(6)
myArray.push(7)
console.log(myArray);    // Output - [ 0, 1, 2, 3, 4, 5, 6, 7 ]

myArray.pop()
console.log(myArray)     // Output - [ 0, 1, 2, 3, 4, 5, 6 ]

myArray.shift()
console.log(myArray)     // Output - [ 1, 2, 3, 4, 5, 6 ]

myArray.unshift(9)
console.log(myArray)     // Output - [ 9, 1, 2, 3, 4, 5, 6 ]

console.log(myArray.includes(69));    // Array incudes 69 or not .. so Output - false
console.log(myArray.indexOf(69));     // Output - -1   .. because 69 not exist in the array.
console.log(myArray.indexOf(7));      // Output - -1   .. because 7 not exist in the array.

console.log(myArray.indexOf(5));      // Output - 5   .. because 5 exist in fifth index of the array.
console.log(myArray.indexOf(9));      // Output - 0   .. because 9 exist in the zeroth index of the array.

const newArray = myArray.join()

console.log(myArray);                // Output - [ 9, 1, 2, 3, 4, 5, 6 ] 
console.log(newArray);               // Output - 9,1,2,3,4,5,6              .join changed the array type from object to string.
console.log(typeof newArray);        // Output - string

// Slice, Splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myn2);


