// Lecture - 17
// Declaring objects using constructor

const tinderUser = new Object()       // Singleton

// const tinderUser = {}              // Non-Singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

console.log(tinderUser);
// Output - { id: '123abc', name: 'Sammy', isLoggedIn: true }

// Object in Object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rishabh",
            Lastname: "Singh"
        }
    }
}

console.log(regularUser.fullname);
// Output - { userfullname: { firstname: 'Rishabh', Lastname: 'Singh' } }

console.log(regularUser.fullname.userfullname);
// Output - { firstname: 'Rishabh', Lastname: 'Singh' }

console.log(regularUser.fullname.userfullname.firstname);
// Output - Rishabh


// Merging or Combining Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);                  // Output - { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } ... this is wrong

const obj3 = Object.assign({}, obj1, obj2)          // Using Assign
console.log(obj3);                          // Output - { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/*
Why we are writing {} this with obj1, obj2 in assign like this -- Object.assign({}, obj1, obj2)
because {} it will act as a target and obj1, obj2, obj3 will act as source so all values
will go in this {} target.. if you do not do like this, they all will go in obj1 .. no difference in it
but we are making it syntactically correct.
*/ 

// We will not use Assign frequently we will use Spread Operator

const obj4 = {...obj1, ...obj2}                 // Using Spread
console.log(obj4);                              // Output - { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Array of Objects
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "r@google.com"
    },
    {
        id: 3,
        email: "xyz.com"
    }

]

console.log(users[1].email);       // Accessing element in Array of object .. simple

// Some more methods :
console.log(tinderUser);                          // Output - { id: '123abc', name: 'Sammy', isLoggedIn: true }
console.log(Object.keys(tinderUser));             // Output - [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));         // Output - [ '123abc', 'Sammy', true ]      .. Notice the datatype of the Output - Array
console.log(Object.entries(tinderUser));          // Output - [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', true ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // Output - true










