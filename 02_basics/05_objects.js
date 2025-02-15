// Lecture - 18
// Object de-structuring and JSON 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(course);                  // Output - { coursename: 'js in hindi', price: '999', courseInstructor: 'hitesh' }
console.log(courseInstructor);        // Output - hitesh

const {courseInstructor : instructor} = course   // we change the courseInstructor to instructor
console.log(instructor);               // Output - hitesh


// In react we create props
/*
const navbar = ({company}) => {
    }

navbar(company = "google")
*/                                   // Read about this for better understanding

// Basics of API
// some values come from backend how you write it ...
// earlier values come in xml structure now values come in json..



/*  // This is json similar like object but objects have some name.
    // In JSON ... key usually are strings as well as their values are string
{
    "name": "rishabh",
    "coursename": "js in hindi",
    "price" = "free"
} 
*/

// https://api.github.com/users/hiteshchoudhary    // this is how you get APIs call. 

// sometime we get APIs in form of Array also.

/*
[
    {},
    {},
    {}
] 
*/

// JSON - is JavaScript Object Notation
// https://randomuser.me/
// https://jsonformatter.org/




