// for.each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// Go in inspect .. go in console run this -> const coding = ["js", "ruby", "java", "python", "cpp"] ,
// write coding you'll get output there you can go in prototype & there you can find forEach also.


// 1st Way
coding.forEach( function (val) {
    console.log(val);
})

/*
What is happening here?

forEach is a built-in JavaScript method for arrays.
It takes a callback function as an argument and executes it for each element in the array.
The function inside forEach is anonymous (it has no name) and receives each array element (val) as a parameter.

Breaking it down:

coding.forEach( → Calls forEach on the array.
function(val) { console.log(val); } → A callback function that logs each element.
forEach executes this function for every item in the array.

Since this function is being passed as a callback, it doesn't need a name.
*/

// 2nd Way
// Arrow Function 
// Alternatively, we can use an arrow function for a shorter syntax.

coding.forEach(  (item)  => {
    console.log(item);
} )


// 3rd Way by using Named Function
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
/*
Output -
js
ruby
java
python
cpp
*/
// same output for all ways 1st, 2nd and 3rd.



// ForEach have more than one parameter access like item, index, arr. Earlier we were only giving item.

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
/*
Output :
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/




// [{}, {}, {}]

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]


myCoding.forEach ( (item) => {
    console.log(item.languageName)
})
/*
Output :
javascript
java
python
*/

/*
myCoding is an array of objects.
We use .forEach() to iterate over each element (object) in myCoding.

In each iteration:
The item parameter represents one object from the array.
console.log(item.languageName); extracts and prints the languageName property of that object.
*/

// Lecture - 29 completed.