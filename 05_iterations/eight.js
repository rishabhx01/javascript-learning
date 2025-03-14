// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce --> Read this

// Array.prototype.reduce()


const myNums = [1, 2, 3]

/*
const myTotal = myNums.reduce( function (accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`)
    return accumulator + currentValue
}, 0 )

console.log(myTotal);                                      

/*
Output - 
accumulator: 0 and currentValue: 1
accumulator: 1 and currentValue: 2
accumulator: 3 and currentValue: 3
6
*/


// let's write this in arrow function.
const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)
console.log(myTotal);



// Example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


// Introduce one functionality which add all the items present in the shopping cart.

const priceToPay = shoppingCart.reduce((acc, item) =>  acc + item.price, 0)
console.log(priceToPay);

// Lecture - 30 Completed.
// From Lec 27 to Lec 30 we have studied iterations in js. --> 29 and 30 are little tricky keep revising.

// Basic stuff of javascript are done .... Now we have to do two things:
// -- 1st Programming Practice .. of logics by doing questions
// -- 2nd PROJECTS.


