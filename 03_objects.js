// Lecture - 16

// Two ways of declaring objects - literal and constructor

// Singleton -- when we use constructor for making an object
// Object.create -- constructor method for declaring object

// When we declare object as literal so no singleton forms , if it is made with use of constructor so singleton form.

// Object literals - it is a way of declaring objects

const mySym = Symbol("Key1")   // Declaration of symbol
// Use this symbol as a key and add this in object.

const JsUser = {
    name: "Rishabh",                          // Objects we write in key-value pair.                                          
    "full name": "Rishabh Singh",             // it can be string, number, boolean, array or object in object.

   // mySym: "mykey1",                         // you cannot do like this 
    [mySym]: "mykey1",                         // to use this as a symbol there is only one way write in [] brackets.
    age: 18,                                   
    location: "Noida",
    email: "rishabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// How to Access Objects ?
// There are two ways :
console.log(JsUser.email)          // First way
console.log(JsUser["email"])       // Second way

// We introduced second way because there is no way for accessing ["full name": "Rishabh Singh"] by first way.
// we can not write it like JsUser.full name  -- not possible.

console.log(JsUser["full name"])

// Concept of symbol with objects

// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)

console.log(JsUser[mySym])


JsUser.email = "rishabh@tesla.com"       // You can make changes in objects
// Object.freeze(JsUser)                    // After using freeze it will no change further
JsUser.email = "rishabh@x.com"
console.log(JsUser) 

// Function in Javascript

console.log("*****************************Functions**********************");

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)       // Concept of String Interpolation
}

console.log(JsUser.greeting);                   // Output - [Function (anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

/* 
While accessing value in object we will be using .dot but there are sometime when 
we have to use []brackets method like we did in full name & symbol.
*/


