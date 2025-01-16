// Comparison between two numbers or comparison between two same datatypes :

/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
*/


// Comparison between two different datatypes :

console.log("2" > 1);        // Output => true
console.log("02" > 1);       // Output => true

/* But the problem here in these types of comparisons are 
sometimes these Comparisons do not give the predictable result
so whenever you are compairing two values please make sure & ensure 
they are of same data type.
int <=> int
string <=> string 
*/

/* Typescript is stricter version of javascript and it does not allows you to 
make comparison between two different datatypes. */


// Comparison of Null :

console.log(null > 0);        // Output => false
console.log(null == 0);       // Output => false
console.log(null >= 0);       // Output => true


/* 
The reason is that an equality check == and 
comparisons > < >= <= works differently.
Comparisons convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false. 
*/


// Comparison of Undefined :

console.log(undefined > 0);        // Output => false
console.log(undefined < 0);        // Output => false
console.log(undefined == 0);       // Output => false
console.log(undefined >= 0);       // Output => false

/*
undefined is converted to NaN and 
any comparison involving NaN is false.
*/

// Strict Check (===)

console.log("4" === 4);      