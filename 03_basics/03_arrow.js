const user = {
    username: "rishabh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()


user.username = "shiva"    // here we changed the context from rishabh to shiva
user.welcomeMessage()


console.log(this);                           // Output - {}    .. here current context is empty
/*
here we got current context as empty because we are in node environment 
because here this is refering to an empty object because right now there is 
not context in the global scope but ... if you do this in browser
console.log(this); you'll get Window.

Why this is happening ?
Earlier there was only way of executing javascript is inside the browser ,, now
we removed that engine from browser and named that engine or environment as 
NODE, DENO etc.. now we have standalone engine ,, in browser the global
object is Window. that's why in browser it's showing Window and in node it' showing {}.
*/


/*
function chai(){
    console.log(this);
}
chai();
*/



/*
function chai(){
    let username = "rishabh"
    console.log(this);
}
chai();
*/


//1st Way
function chai(){
    let username = "rishabh"
    console.log(this.username);
}
chai();                                                        // Output - undefined
// this context is only working with object it's not working with function.



//2nd Way
const coffee = function () {
    let username = "rishabh"
    console.log(this.username);
}
coffee();                                                       // Output - undefined



//3rd Way
// Arrow Function
const tea = () => {                                           // => .. Arrow Function
    let username = "rishabh"
    console.log(this.username);
}
tea();                                                       // Output - undefined


// Syntax of Arrow Function
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4))                                   // Output - 7


// Implicit Return
const addThreee = (num1, num2, num3) =>  num1 + num2 + num3
console.log(addThreee(3, 4, 6))                               // Output - 13

// or
const addThree = (num1, num2, num3) =>  (num1 + num2 + num3)
console.log(addThree(3, 4, 6))                               // Output - 13    //focus on three & threee in Revision

/*
if you wrap in curly braces {} so you have to write return keyword no matter what
but if you use parenthesis () no need to write return keyword .... important technique in React
*/

// Explicit Return .. means when you have to use return keyword



// Returning Object without parenthesis and with parenthesis.
/*
const returnObject = () => {username: "rishabh"}
console.log(returnObject())                                  // Output - undefined
*/

const returnObject = () => ({username: "rishabh"})
console.log(returnObject())                                  // Output - { username: 'rishabh' }

// so without () it will return undefined and with () it will return { username: 'rishabh' }
// To return object you have to wrap them in parenthesis.



const myArray = [2, 5, 3, 7, 8]

myArray.forEach(() => {})                // Arrow Function
myArray.forEach( function () {})         // Classic Function
// We will discuss this later.
// Lecture 23 Done.