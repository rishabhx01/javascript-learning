// Dates in Javascript

// Date is an object in javascript.
// JavaScript stores date as number of milliseconds since January 01, 1970.

let myDate = new Date()      // We have created an instance of an object.
console.log(myDate);              // Output - 2025-01-19T16:38:15.310Z

/* The above output is less understandable let's convert it into string then see what' happening ?*/

console.log(myDate.toString());   // Output - Sun Jan 19 2025 16:41:11 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());     // Output - Sun Jan 19 2025
console.log(myDate.toISOString());      // Output - 2025-01-19T16:43:16.540Z
console.log(myDate.toJSON());           // Output - 2025-01-19T16:43:16.540Z

console.log(myDate.toLocaleDateString());  // Output - 1/19/2025
console.log(myDate.toLocaleString());      // Output - 1/19/2025, 4:46:33 PM


console.log(typeof myDate);    // Output - Object 
// Date is an object.

// Declaring a new Date :

/*
let myCreatedDate = new Date(2025, 0, 19)                // Month start from 0 in this format
console.log(myCreatedDate);                              // Output - 2025-01-19T00:00:00.000Z
console.log(myCreatedDate.toDateString());               // Output - Sun Jan 19 2025  
*/


/*
let myCreatedDate = new Date(2025, 0, 19, 23, 30)
console.log(myCreatedDate.toLocaleString());              // Output - 1/19/2025, 11:30:00 PM
*/

/*
let myCreatedDate = new Date("2025-01-19")
console.log(myCreatedDate.toLocaleString());              // Output - 1/19/2025, 12:00:00 AM
*/


let myCreatedDate = new Date("01-19-2025")
console.log(myCreatedDate.toLocaleString());              // Output - 1/19/2025, 12:00:00 AM


// Timestamp is helpful in designing quizes and polls.

let myTimeStamp = Date.now()

console.log(myTimeStamp);                          // Output = 1737306778317
console.log(myCreatedDate.getTime());              // Output = 1737244800000    /*Now we want to convert this into seconds.*/
console.log(Math.floor(Date.now()/1000));          // Output = 1737306976

// Some more methods that we can use with Dates.

let newDate = new Date()
console.log(newDate);

console.log(newDate.getDate());        // Output = 19
console.log(newDate.getDay());         // Output = 0 maybe because today is Sunday.
console.log(newDate.getMonth());       // Output = 0 maybe because month is January.



newDate.toLocaleString('default',{       // VS Code intellisence = ctrl + space.
    weekday: "long",

})

// Lecture No. 13 is Finished here, it is little complex.

// Read the Docs
// We will learn more about this later this is basics.
// Keep Revising and Practicing 
// Don't get caught in tutorial hell .. read docs for better understanding.


// VS Code shortcuts :

// VS Code intellisence = ctrl + space.
// VS Code terminal = ctrl + `
// To not write again and again in terminal use uppward key.
