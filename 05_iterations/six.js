// The .forEach() method is used to iterate over an array and execute a callback function on each element. 
// However, it does not return anything (it always returns undefined).

const coding = ["js", "ruby", "java", "python", "cpp"]

// Case 1: Simple forEach() Execution
coding.forEach( (item) => {
    console.log(item)
})



// Case 2: Storing forEach() in a Variable
const values = coding.forEach( (item) => {
    console.log(item);
})
console.log(values);
// The loop runs and prints all values.
// But when we try to log values, it is undefined.



// Case 3: Returning a Value Inside forEach()
const values1 = coding.forEach( (item) => {
    // console.log(item);
    return item;
})
console.log(values1);                                         // Output - undefined
// The function is executed, but return item; does nothing because forEach() ignores return values.
// Even though each callback function returns item, the return values are discarded.


// Filter
/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums);                                              // Output - [ 5, 6, 7, 8, 9, 10 ]
*/

// The .filter() method loops through each element in an array.
// It takes a callback function that gets executed for every element.
// If the condition inside filter() is true, that element gets added to the new array.
// If the condition is false, the element is ignored (not included in the new array).
// It does NOT modify the original array.
// .filter() always returns a new array.
// If no element matches the condition, an empty array [] is returned.
// You must provide a return statement when using {} inside filter().

/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    num > 4
} )
console.log(newNums);                                           // Output - []

// This is what i studied in arrow functions—when explicit return is required and when it happens automatically.
// Here, when we use () (parentheses), the return happens automatically. But when we use {} (curly braces), 
// meaning we start a scope, we must use the return keyword explicitly.


const newNums1 = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums1);                                              // Output - [ 5, 6, 7, 8, 9, 10 ]
/*
if you wrap in curly braces {} so you have to write return keyword no matter what
but if you use parenthesis () no need to write return keyword .... important technique in React
*/

// Explicit Return .. means when you have to use return keyword.


// So let's do the same thing by using forEach instead of filter.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);                                   // Output - [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => { 
    return bk.genre === 'History'  
})

// .filter() is a higher-order function that returns a new array containing only those elements 
// that satisfy the given condition. Here, bk represents each book object in the array.
// Condition: bk.genre === 'History' will select only the books with the "History" genre.

userBooks = books.filter( (bk) => bk.publish >= 1995)

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);
