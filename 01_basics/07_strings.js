// Strings in JavaScript

const name = "Rishabh"
console.log(name[0]);
const repoCount = 3

// console.log(name + repoCount + " Value"); //This is bad syntax for concatination and it is outdated.

// Modern way of writing is by using (backticks) (``) -- concept of String Interpolation here we make placeholders.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


/* String Declaration by using new keyword here we are using objects.
In line 11 and 3 there is not any significance difference, behind the scense line 3 is also invoking object. */

const gameName = new String ("Rishabh-Singh-Great") // Concept of key-value pair discussed in Console.

console.log(gameName[0]);  // Accessing Key Value pair.
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);

console.log(gameName.__proto__); // Accessing protype of string that we have seen in console

// Accessing all prototype methods. 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('b'));

// You can check methods in console and read about methods in MDN Docs ...

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-17 , 4)
console.log(anotherString);

// you cannot use negative(-) in substring but you can use in slice.

const newStringOne = "   rishabh    "
console.log(newStringOne);
console.log(newStringOne.trim())
/* 
trim remove the unwanted space useful in creation of forms when people
write their name and sometimes gives extra spaces. */
// Read MDN documentation must thing to do..

const url = "https://rishabh.com/rishabh%20singh"
console.log(url.replace('%20','-'))                   // Output - https://rishabh.com/rishabh-singh

 
console.log(url.includes('rishabh'))           // Output - True
console.log(url.includes('sharma'))            // Output - False

console.log(gameName.split('-'));

// Lecture - 11 Done :)


