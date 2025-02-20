/*
let a = 10
const b = 20 
var c = 30

console.log(a);
console.log(b);
console.log(c);

/*
Why we have var, let and const for doing samething ?
we had var then why we introduced let and const ?

Problem arises when we use scope .. {}
we use scope {} with functions, loops and with conditional statements also like like if, else.
we use {} this with objects also that is for Object Declaration.
when we use this {} with functions, if,else .. then it is called scope or scope of that function.
*/ 


/*
if (true) {
    let a = 10
    const b = 20
    var c = 30
 
}

// console.log(a);                  // Output - Error - a is not defined
// console.log(b);                  // Output - Error - b is not defined
console.log(c);                     // Output - 30
*/



var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
 
}

// console.log(a);                  // Output - Error - a is not defined
// console.log(b);                  // Output - Error - b is not defined
console.log(c);                     // Output - 30

/* 
so this is the problem with var we have defined with var c = 300 outside the 
block space but its printing what's written inside the block space which is 30.
here block space and global space are dependent on each other.
*/


let a = 300

if (true) {
    let a = 10
    console.log("Inner a : ", a);                   // Output - Inner a :  10
}
console.log(a);                                     // Output - 300

// So here block space and global space are independent of each other.

// when we check scope in our browser'consoles and when we use it in code 
// environment Like Node so there is difference in global scope we will discuss it later.

/*********************************************************************************************************************************/
// Nested Scope

function one(){
    const username = "rishabh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);                 - ReferenceError: website is not defined

    two()
}
one()

// Output - rishabh

/*
So in Nested Function .. the child function can access the variable
of parent function.  Read about concept of Closure source - Hitesh Sir English Channel.
*/

// Nested if-else

if (true) {
    const username = "gigachadcodes"
    if (username === "gigachadcodes") {
        const website = " youtube"
        console.log(username + website);            // Output - gigachadcodes youtube
    }
    // console.log(website);                        -- Error 1
} 

// console.log(username);                     -- Error 2 ReferenceError: username is not defined

// ++++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1st way
function addOne(num) {
    return num + 1
}

console.log(addOne(5));                              // Output - 6



// 2nd way
console.log(addTwo(5));                              // Output - 7

function addTwo(num) {
    return num + 2
}


// 3rd way
const addThree = function addThree(num) {         // This is also function but it can also be said as Expression.
    return num + 3
}

console.log(addThree(5));                           // Output - 8

// In javascript variables are very powerful they can hold function, json etc.. 


/*

console.log(addFour(5)); 

const addFour = function addFour(num) {
    return num + 4
}

*/

// This will show error - ReferenceError: Cannot access 'addFour' before initialization.
// Concept of Hoisting read about it.

// Lec 21 and 22 done.


