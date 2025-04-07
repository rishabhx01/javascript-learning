// Promises 

/*
Synchronous:
In synchronous programming, code is executed line by line, and each task 
waits for the previous one to finish before moving to the next.

- It’s blocking, meaning the entire program pauses until the current operation is complete.
- Example: Reading a large file or doing a heavy calculation will freeze the UI until it's done.

Asynchronous:
In asynchronous programming, tasks are executed independently, and the program 
can continue running without waiting for the task to finish.

- It’s non-blocking, meaning long operations (like API calls, timers, file access) can run in the background.
- Example: While waiting for data from an API, the app can keep running — no freezing.




// Concept of Promise

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise in JavaScript is like making a commitment to do a task later — not right now.
// You assign a task to JavaScript, but it doesn't execute it immediately — instead, it puts it in a queue.

// Que. Why does this happen?

// Not every task can be completed instantly.
// Some operations take real-world time, such as:

// - Reading a file from your system (requires OS/kernel-level access)
// - Performing heavy cryptography
// - Sending/receiving data from a database or server (especially if the server is in another continent — network delays!)

// These are called asynchronous operations — they take time to complete.

// So what do we do ?

// For such tasks, JavaScript gives us two main tools:
// - Promise
// - async/await (which is actually built on top of Promises)

// Using these tools, we tell JavaScript:
// "Do this task in the background. When it's done, let me know — I’ll handle the result then."

// A Promise is in one of these states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation was completed successfully.
// - rejected: meaning that the operation failed.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise --> link for study

*/

// There are two things in promises creation and consuming

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){                           // resolve have connection with .then()
    console.log("Promise consumed");
})         


// Another approach
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved"); 
})

// here we don't have to do so much things like XHR .. here it is simple make promise there 
// will be resolve and reject and when resolve is done we get the output.


// Third Promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){                                    // let pass some data that came from network
        resolve({username: "Rishabh", email: "rish@example.com"})    // we have passed the data into the resolve
    }, 1000)

})
// consuming the promise
promiseThree.then(function(user){
    console.log(user);                                   // Output - { username: 'Rishabh', email: 'rish@example.com' }
    
    // so one thing is confirmed that when we do consumption whatever 
    // parameter passed in resolve we get that parameter in console.log(user); 
})


// Fourth Promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false                                       // Error based checking and let's find out resolve and reject
        if (!error) {
            resolve({username: "rishabh", password: "123"})     // if not error resolve else rejection
        } else {
            reject('ERROR: Something went wrong')
        }

    },1000)
})
/*
- What's happening here?

- A new Promise is being created.
- Inside the promise, there's a setTimeout() to simulate a delay (like an API call).
- The variable error is being used to simulate a failure. If error is false, the promise will resolve. If true, it will reject.
- After 1 second, based on error, either resolve() or reject() is called.
*/

// consuming the promise
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

/*
What’s going on here?
.then((user) => { ... })
If the promise is resolved, it logs the whole user object and returns user.username for the next .then().

.then((username) => { ... })
Receives the returned username from the first .then() and logs it.

.catch((error) => { ... })
If the promise is rejected, it catches the error and logs it.

.finally(() => { ... })
This runs no matter what — whether the promise was resolved or rejected.
It’s useful for cleanup code (like hiding loaders/spinners etc).
*/

/*
Output when error = true:
ERROR: Something went wrong
The promise is either resolved or rejected


Output when error = false:
{ username: 'rishabh', password: '123' }
rishabh
The promise is either resolved or rejected
*/

// Fifth Promise

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }

    })
})

// Let' handle this with promise by using async - await. 
// it is not mandatory to always handle it with .catch and .then

/*
async function consumePromiseFive() {              // async - await is similar to .then and .catch but it do not handle catch gracefully 
    const response = await promiseFive                // promise is an object so you cannot consume it like await promiseFive()
    console.log(response);
}
consumePromiseFive()
// async - await directly do not handle the error 
*/

async function consumePromiseFive() {
    try {
        const response = await promiseFive 
        console.log(response);
    } catch (error){
        console.log(error);
    }
}
consumePromiseFive()


/*
async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()                            // Data will be come in string so convert in json
    console.log = response.json()
    console.log(data);
}

getAllUsers()
*/


/*
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        
        // const data = response.json()        // It will take time so make it await
        const data = await response.json()
        console.log(data);    
    } catch (error) {
        console.log("E: ", error);
        
    }   
}

getAllUsers()
*/

// The data are not loading ... There are so many things that take time .. this code is perfect 

// Write this same function into .catch and .then format. 

fetch('https://api.github.com/users/rishabhx01')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch( (error) => console.log(error))


// Interview related -
/*
A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL 
or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that 
indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
*/

// Important Links
// Revision + Practice + Reading Docs + Project 

// Links of blogs to read
// https://dev.to/logrocket/the-fetch-api-is-finally-coming-to-nodejs-foe?comments_sort=oldest
// https://blog.logrocket.com/fetch-api-javascript/
//https://blog.logrocket.com/fetch-api-node-js/
// https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#specifications
// https://fetch.spec.whatwg.org/#fetch-method


// All about fetch:

// ✅ What really happens when we use fetch()

// 1️⃣ Memory Side (JavaScript Engine):
// --------------------------------------
// - When you call fetch(), it immediately returns a Promise object.
// - Inside this Promise:
//     [[PromiseState]] is "pending"
//     [[PromiseResult]] is "undefined" (initially)
// - Internally, JavaScript sets up two arrays:
//     - onFulfilled[]  → Stores success callbacks
//     - onRejected[]   → Stores failure/error callbacks
// - These are stored in JS memory and used later when the response comes back.


// 2️⃣ Browser / Node.js Side (Environment):
// ----------------------------------------
// - While JavaScript sets up memory, the browser (or Node.js) sends the actual network request.
// - Behind the scenes, it performs things like:
//     - DNS lookup
//     - TCP connection
//     - TLS handshake
//     - HTTP request

// This is handled outside the JavaScript engine (in the browser or host environment).


// 🔄 What happens when response comes back?

// ✅ If response is received (even if it’s a 404 or 500):
// - It is NOT considered an error.
// - The Promise is resolved and .then() block runs.
// - You need to manually check response.ok to detect 404, 500, etc.

// ❌ If NO response is received (e.g., no internet, server down):
// - The Promise is rejected.
// - .catch() block is triggered because there was no network-level response.


// 🧠 BONUS:
// - The response from fetch() is a stream, so to get usable data:
//     response.json() → returns another Promise (parsing takes time)
// - That’s why you usually chain .then() calls.


// 🔁 Summary:
// - fetch() returns a Promise immediately.
// - Two things happen in parallel:
//     1. JS engine sets up memory with success/failure handlers.
//     2. Browser/Node sends the actual request.
// - If response (any status) comes → .then() runs
// - If no response at all → .catch() runs
