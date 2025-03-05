// 25 lectures are completed .. This is Lecture 26
// Try to finish what you started ASAP .. then move on projects.
// Real learning comes by building projects .. all by yourself.

// So all the basic stuff of Javascript are done.

// Lec 26 - Control Flow or Logic Flow

// First control flow - if

/*
if ( here we write condition, condition = true) --> then we open scope {
     // when what's written in parenthesis is true then the code written in 
     scope gets {} implemented.
}
*/

const isUserloggedIn = true

if (isUserloggedIn){

}

/* Comparison operator:
<, >, <=, >=, ==, !=, ===, !==

= .. single equal is for operator assignment
== .. double equal is for to check whether it is equal .. 4 == 4
=== .. triple equal, it check type also .. used in strict checking
!== .. used in strict checking with antipattern 
*/

console.log(typeof 2);                    // Output - number
console.log(typeof "2");                  // Output - string

/*
if ( 2 == "2") {
    console.log("executed");              // Output - executed
}
*/

// that's why we have string checking.

if ( 2 === "2") {
    console.log("executed");
}                                          // This is not giving any output no output.


temperature = 41

/*
if ( temperature < 50 ){
    console.log("less than 50");                  // Output - less than 50
}
console.log("temperature is greater than 50")        // Output - temperature is greater than 50

both get executed so that's the problem that's why we have Else.
*/

if ( temperature < 50 ){
    console.log("less than 50");                      // Output - less than 50       
}
else {
    console.log("temperature is greater than 50") 
}   
console.log("Execute")                                   // Output - Execute



const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);             // Output - User power: fly
}
 
// console.log(`User power: ${power}`);                // ReferenceError: power is not defined
/*
ReferenceError: power is not defined .. this happened because of scope power is defined is within the if's scope
that's why it's showing error while printing the outside of if's scope {} but if you are using var instead of const ...
var power = "fly" instead of const power = "fly" it's not showing error [printing .. User power: fly] .. so that's the
problem with var that's why we used let and const throughout the javascript nowdays.
*/

const balance = 1000
if (balance > 500) console.log("test");    // This is implicit scope.

if (balance > 900) console.log("test"), 
console.log("test2");    // This is implicit scope, in multiple line .. not good practice in coding so don't use


/*
// Nested Conditions:

const balance1 = 1000

if (balance < 500){
    console.log("less than 500");

} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 900");

} else {
    console.log("less than 1200");                           
}                                                     // Output - less than 1200

*/



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {                                // AND .. both should be true
    console.log ("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {                // OR .. anyone should true
    console.log("User logged In")
}

// Next topic switch
