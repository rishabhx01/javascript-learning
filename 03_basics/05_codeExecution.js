// let's learn how code get executed in javascript

// Javascript is a single - threaded


// Javascript Execution Context: whatever file or code you have 
// created how js going to run that .. this is Javascript Execution Context.
// Two phases of running of programs in javascript.
// 1. Memory Creation Phase or Creation Phase
// 2. Execution Phase


// Global Execution Context .. y to hoga hee hoga .. and it is referred to this keyword.
// ...... All types of Execution Context .............
// Global Execution Context
// Functional Execution Context
// Eval Execution Context


let val1 = 10
let val2 = 5

function addNum (num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum (val1, val2)
let result2 = addNum (10, 2)

console.log(result1);
console.log(result2);

// Steps involved :
/*
Step 1. Global Execution and it allocated in this keyword
Step 2. Memory Creation Phase                               // First phase or cycle is completed

Step 3. Execution Phase                                     // Second phase or cycle is completed
*/


// For every function call, a New Execution Context is created, which goes through the Memory Phase and Execution Phase. 
// Once the function execution is complete, its execution context is removed from the Call Stack.


/***************************************************************************************************************************/

// Concept of call stack :

/*
function one(){
    console.log("one")
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}

one();
two();
three();
*/


// Run this in browser by going in sources and check call stack 
// Works on LIFO - Last In First Out

function one(){
    console.log("one")
    two ()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}

one();
two();
three();


// The Call Stack is a data structure used by JavaScript to keep track of function execution. 
// It follows the LIFO (Last In, First Out) principle, meaning 
// the last function that goes in is the first one to come out.

