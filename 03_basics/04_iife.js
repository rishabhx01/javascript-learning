// Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
chai();

// but we want to immediately invoke this function what we can do ?
// we can use parenthesis.

(function tea(){
    // named IIFE
    console.log(`DB CONNECTED TWO`);
})();                                         // here we wrapped the function in parenthesis ().

// ()() ... first parenthesis () is for definition and second one is for execution.

/*
An IIFE is a function that executes immediately as soon as it is defined.
The main purpose of IIFE (Immediately Invoked Function Expression) is to 
remove global scope pollution and keep variables inside a local scope, preventing accidental modifications.
It prevents any variables from leaking into the global scope.
Provides encapsulation (Creates a private scope).
*/



// IIFE with Arrow Function
( () => {
    console.log(`DB CONNECTED THREE`);
} )();

// we have to use semicolon (;) to end the IIFE.
// IIFE also work with arrow function.


// Expecting and Passing name.       // means passing the argument and parameter in IIFE .. IIFE is also a function 
( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED THREE ${name}`);
} )('rishabh');

