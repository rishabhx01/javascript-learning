// In this lectures we are going to study about Array specific loops.

// string in array -> ["", "", ""]
// objects in array -> [{}, {}, {}]

// for..of loop - Syntax
/*
for (const element of object) {       // here object do not mean object dataype here object can be anything. arr, string etc.
    
}

The for...of loop is used to iterate over iterable objects like arrays, strings, Maps, Sets, and more.

object → Can be an array, string, Map, Set, etc.
element → Holds the value of the current iteration.
*/

// Applying for..of loop on Arrays
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


// Applying for..of loop on Strings
const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`Each char in ${greet}`);
}



// Concept of Maps
/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.

In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and 
has no methods or properties. There are 7 primitive data types.
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map --> Study this during Revision

const map = new Map()
map.set("IN", "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set("IN", "India")

console.log(map);

/* 
Output :
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}  
// Double entries not allowed in maps, map is known for unique values.
// And in which order we inserted in same order we get our output.  
*/

// Applying for..of loop on Maps

for (const key of map) {
    console.log(key);
}
/*
Output :
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
*/



// Destructuring Arrays as output in for..of loops on Maps

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
/*
Output :
IN :- India
USA :- United States of America
FR :- France
*/




// Applying for..of loop on Object
/*
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}

// Output - myObject is not iterable
so, for..of is not working with objects
*/