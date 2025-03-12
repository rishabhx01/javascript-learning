// Truthy and Falsy Values in JavaScript

/*
const userEmail = "r@rishabh.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}                                                                    // Output - Got user email

/*
we have not applied any condition or checked any condition like userEmail = "r@rishabh.ai" , we have checked that we have value 
and then we logged output accordingly... Point to note - we have not done any comaparison we assumed that our string
is a truth value .. this is called truthy value.
Truthy Value - when we simply assume that our string has true value.
*/



/*
// Let's check for empty string
const userEmail = ""

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}                                                                      // Output - Don't have user email
*/



// Let's check for Array
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}                                                                        // Output - Got user email


/*
falsy values :
false , 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values :
"0", 'false', " ", [], {}, function(){}
*/

if (userEmail.length === 0) {
    console.log("Array is empty");
}


// How we can detect whether a object is empty or not ?
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/*
Go in Inspect - Console check                   ...... Just Remember this.
false == 0                    Output - true
false == ''                   Output - true
0 == ''                       Output - true
*/ 

// && Operator 
// || Operator

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10                                    Output - 5

// val1 = null ?? 10                                 Output - 10

// val1 = undefined ?? 15                            Output - 15

val1 = null ?? 10 ?? 20                           // Output - 10

console.log (val1);

// Why we use Nullish Coalescing Operator (??).

// The Nullish Coalescing Operator (??) checks only for null or undefined and ensures a safe fallback value.
// Safer than || when dealing with numbers or boolean values.
// Useful for setting default values in APIs, user inputs, and configurations.


// Terniary Operator
// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// Lecture - 26 completed.