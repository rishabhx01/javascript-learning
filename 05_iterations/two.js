// While loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}


// Array with while loop
let myArray = ["flash", "batman", "superman"]

let arr = 0
while (arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}



// Do-while loop

/*
let score = 10

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
*/

let score = 11

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

// Lecture 28 Completed.

/*
Interview Perspective :

while Loop:
The condition is checked first; if it's true, the loop executes.
If the condition is false from the start, the loop will never run.

do...while Loop
The code executes first, even if the condition is false.
Then, the condition is checked. If true, the loop continues; otherwise, it stops.
This will run at least once!
*/
