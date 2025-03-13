// For Loop

// Syntax and working of For Loop 
/*
for (initialization -> let i = 0; condition -> i <= 10; increment or decrement -> i++){
                whatever you want to print 
                console.log(i);  

Now after printing increment applies then i = 1 and again condition check 1 <= 10 .. it will run till i = 10.
}
*/


// 1st method simply logging i.
for (let i = 0; i <= 10; i++) {
    console.log(i);    
}                                                      // Output - 0 1 2 3 4 5 6 7 8 9 10


// 2nd method logging i in element.
for (let i = 0; i <= 10; i++){
    const element = i;
    console.log(element);
}                                                    // Output - 0 1 2 3 4 5 6 7 8 9 10

// console.log(element);             -> element is not defined this happened because element do not have access outside of scope.




// What will happen if we use var.  
// Block Scope Issue with var.
for (let i = 0; i <= 10; i++){
    var element = i;
    console.log(element);
}                                                    
console.log(element);                              // Output - 0 1 2 3 4 5 6 7 8 9 10 10


// Using if with for loop
for (let i = 0; i <= 10; i++){
    const element = i;
    if (element == 5){
        console.log("5 is best number")
    }
    console.log(element);
}  


// Loop in Loop
for (let i = 0; i <= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++){
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

// Printing tables.
for (let i = 1; i <= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++){
        console.log(i + '*' + j + ' = ' + i*j);
    }
}


// For Loop with Array
let myArray = ["Ironman", "Batman", "Spiderman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);    
}

// shortcuts - Alt + shift + downarrow
// shortcuts - ctrl + d

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);    
}

// Lecture - 27 completed.