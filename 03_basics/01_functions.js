// Lecture - 19 
// Functions in javascript

/*
console.log("R");
console.log("I");
console.log("S");
console.log("H");
console.log("A");
console.log("B");
console.log("H");
*/

// Now if we have to print it 5 times so we can do this
// But what if we have to print it 5000 times

// So that's why we use Functions

// Function - Keyword, sayMyName - Function's Name, () - Scope ... {}


function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}

// sayMyName  .. function's Reference
// sayMyName() .. after putting () parenthesis .. this is function's execution

sayMyName()



// Function for Adding two numbers

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}
addTwoNumbers()                                 // Output - NaN
// addTwoNumbers(// Pass the arguments)

addTwoNumbers(5,9)                             // Output - 14
// (number1, number2) -- this is parameters
// addTwoNumbers(5,9)  -- this is we passed the arguments in function


const result = addTwoNumbers(3,5)            // Output - 8
console.log("Result: ", result);             // Result:  undefined


// Que - Output for result is coming - 8 but it's showing undefined then.
/*
console.log() is just a debugging tool that prints a value to the console (browser console or Node.js terminal). 
It has nothing to do with return.
console.log() only displays output.
return is used to send a value out of a function so that it can be used elsewhere.
If a function only has console.log(), 
it does not return any value (meaning it returns undefined by default).
*/



// Concept of log vs result

function addThreeNumbers(number1, number2, number3) {
    let result1 = number1 + number2 + number3
    console.log("Rishabh");      // Output - Rishabh .. it is printed because it is written before return
    return result1
    console.log("Rishabh");      // after return nothing will get printed
    // return number1 + number2 + number3 also a way of writing
    
}

const result1 = addThreeNumbers(6, 6, 6) 
console.log("Result: ", result1)                   // Output - Result:  18



// New Function 
function loginUserMessage(username ){
    if(username === undefined){                      // username === undefined and !usename both are same thing
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("rishabh"))            // Output - rishabh just logged in
console.log(loginUserMessage(""))                   // Output - just logged in
// console.log(loginUserMessage())                     // Output - undefined just logged in


// After implementing if statement
console.log(loginUserMessage())                     // Output - Please enter a username
console.log(loginUserMessage("Champion"))           // Output - Champion just logged in





/********************************************** Lecture 20 *******************************************************/

// Sometime in projects like shoping cart .. we do not how many arguments will come,
// so we have to prepare parameters accordingly .. like in cart we don't know how many items user will add.

function calculateCartPrice(...num1){
    return num1
}

// we are not using function for console log (like we did in first function addTwoNumbers) 
// so we have to do it by ourself.

// console.log(calculateCartPrice(2))                     // Output - 2
// console.log(calculateCartPrice(200, 400, 600))         // Output - 200

//   ... this is called rest operator as well as spread operator 
// it depend on the use-case ... here we will use rest for solving calculateCartPrice problem.

// function calculateCartPrice(...num1) after using ...
console.log(calculateCartPrice(200, 400, 600))            // Output - [ 200, 400, 600 ]
// Now the output is in array .. so we can add this.



/*
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 2000))            // Output - [ 600, 2000 ]
*/ 




// How to handle object with Function ?

const user = {
    username: "Rishabh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)                   // Output - Username is Rishabh and price is 199

handleObject({
    username: "sam",
    price: 399
})                                      // Output - Username is sam and price is 399



// How to handle array with Function ?

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));                 // Output - 400
console.log(returnSecondValue([200, 400, 500, 1000]));         // Output - 400



// Lecture 19 and 20 .. Finished .. Function Done .. Practice it make some function.







