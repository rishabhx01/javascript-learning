// Number to String Conversion :


//let score = "33"

let score = "33abc"

console.log(typeof score);
console.log(typeof (score)); //here written as method .. two ways of writing typeof

let valueInNumber = Number(score)  //here it converted a string "33" in number
console.log(typeof valueInNumber); //it will give output as number because we know we have converted the string in number
//What we will happen for 33abc .. this is not a number. so 33abc should not convert in number.
console.log(valueInNumber);
/*Output NaN -- not a number*/ 


let score1 = null
console.log(typeof score1);                 //output => object
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber);          //output => number
console.log(valueInNumber1);                //output => we are checking what is in valueInNumber1 so it is 0.



// So notes for this :

// "33" => 33
// "33abc" => NaN .. but iska jo type hai vo Number hee hai
// true => 1 ; false => 0
// undefined => NaN .. but iska jo type hai vo bhi number hai.

// Boolean Conversion :

let isLoggedIn = "Rishabh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true ; 0 => false
// "" => false
// "Rishabh" => true


// Number to String Conversion :

let someNumber = 69

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);