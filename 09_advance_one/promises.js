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


