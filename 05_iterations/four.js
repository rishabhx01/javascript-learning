// So, in three.js we have seen that the for..of loop is working with maps but not with objects.
// so, here comes the concept of for..in loops

// for..in loops

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
}
/*
Output :              -- As output we got all the keys but we want to find object as well.
js
cpp
rb
swift
*/

for (const key in myObject) {
    console.log(`${key} filename is for ${myObject[key]}`);
}
/*
Output :
js filename is for javascript
cpp filename is for C++
rb filename is for ruby
swift filename is for swift by apple 
*/



// for..in loops with Arrays

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key);
}
/*
Output :
0
1
2
3
4
*/

// Getting Values Instead of Indexes 
// Que- Can I retrieve values from an array instead of indexes using a for...in loop?

// No, for...in loops always return indexes (keys) when used with arrays. 
// However, you can use the index to get values manually, like this:

for (const key in programming) {
    console.log(programming[key]);         // Getting values using indexes
}
/*
Output :
js
rb
py
java
cpp
*/

// But a better way to get values directly is to use for...of.



// Important Notes :
/*
The major difference is:
for...in → Iterates over keys (indexes in arrays, property names in objects)
for...of → Iterates over values (actual elements in arrays, characters in strings, etc.)

In JavaScript, arrays are objects and their keys (or indexes) are always numeric (0,1,2,...).
This is why we needed objects, which allow custom keys.
*/



/*
// for..in loop on Map

const map = new Map()
map.set("IN", "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set("IN", "India")

for (const key in map) {
    console.log(key);
}
// No Output because it is not iterable. 
*/


// for...in is used for objects (keys).
// for...of is used for arrays, strings, maps, and sets (values).
// for...in works on arrays but gives indexes instead of values.
// for...in does not work on Maps (use for...of instead).

// Next topic is for..each loop.