# Projects related to DOM

## project link for practice source StackBlitz
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1 - Color Scheme Switcher

```javascript
// First we need to select the elements which elements .. all the button and
// then we have to select the body using querySelector.

// document.querySelectorAll('.button')
// Now let's hold this in a variable

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

// Events in javascript
/* 
There are so many events in browser like moving cursor, closing tab, right
click, left click etc... all are events
*/

buttons.forEach( function (button) {     // because we have nodeList so we can apply forEach
  console.log(button);
  button.addEventListener('click', function (e){
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
## Project 2 - BMI Calculator

```javascript

// First we need to select form .. because the submit or calculate button is in the form.
// const height = parseInt(document.querySelector('#height').value)
// this usecase will give you empty 

const form = document.querySelector('form')

// whenever form get submitted it is submitted by post type or get type.

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value) // value parsed into integer
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight  / ((height*height)/10000)).toFixed(2)

    let category = '';

  if (bmi < 18.6) {
    category = `Underweight`;
  } else if (bmi <= 24.9) {
    category = `Normal Range`;
  } else {
    category = `Overweight`;
  }

    /*  // Check your mistake....
    
    if (bmi < 18.6){
      results.innerHTML = `Under weight ${bmi}`;
    } else if (bmi <= 24.9) {
      results.innerHTML = `Normal Range ${bmi}`;
    } else {
      results.innerHTML = `Overweight ${bmi}`;
    }
    */


  // Show both BMI value and category
  results.innerHTML = `<span>${category}: ${bmi}</span>`;

  }

})

```