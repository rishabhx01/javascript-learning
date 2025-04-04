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

## Project 3 - Digital Clock

```javascript

const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// It is a digital clock so it should change at every second


/*
setInterval() is a JavaScript function that repeatedly executes a specified function at a fixed time interval. It is asynchronous, meaning it does not block the execution of other code.
*/

/*
setInterval() runs a function repeatedly at a fixed interval.
Time is given in milliseconds (ms).
Use clearInterval(id) to stop it.
*/


setInterval( function (){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```

## Project 4 - Guess the Number

```javascript
// First we need to generate a random number to generate a random number we will use Math Library

let randomNumber = parseInt(Math.random() * 100 + 1); 

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []   // for previous guessed value .. this is array
let numGuess = 1     // Number of attempts or guesses  .. starting from 1

let playGame = true;

// Check you are available for playing game or not
if (playGame) {
  submit.addEventListener('click', function (e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}




// First Function
// for checking user giving number not a, b, c 
// then we will check value should not be negative
// then we will check range it should 1 to 100
// this all the validation we will perform in this metthod
function validateGuess(guess) {
  if(isNaN(guess)) {
    alert('Please enter a valid number')
  } else if (guess < 1) {
    alert('Please enter a number more than 1')
  } else if (guess > 100) {
    alert ('Please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if(numGuess === 11){     // let numGuess = 1 we have taken this above as global scoping
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}




// Second Function
// earlier we only validated the values
// here we will print messages
// Guessed value is high, low or correct this all will be done in this method.
function checkGuess (guess) {
  if(guess === randomNumber) {
    displayMessage(`You guessed it right`)
    endGame()
  } else if (guess < randomNumber){
    displayMessage(`Number is TOOO low`)

  } else if (guess > randomNumber){
    displayMessage(`Number is TOOO high`)
  } 
}



// Third Function
function displayGuess(guess) {
  userInput.value = ''                   // cleaning up method
  guessSlot.innerHTML += `${guess}  `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `
}





// Fourth Function
// This will interact with DOM.
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2> ${message}</h2>`
}



function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id ="newGame"> Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame();
}


function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1); 
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled'); 
    startOver.removeChild(p);
    playGame = true
  })

}


```

## Project 5 - Keyboard Check

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```

## Project 6 - Unlimited Background Color Changer

```javascript

// button -> eventListener
// after every second it should change color so we can apply SetInterval().

// Que -> how to generate random colors
// Hex -> A hexadecimal number is defined as a number to the base 16, where each digit can range from 0 to F (representing 0 to 15 in decimal). It allows the representation of numbers using the digits 0-9 and A-F.

// generate a random color

const randomColor = function() {
  const hex = "0123456789ABCDEF"
  let color = '#'
  for (let i = 0; i < 6; i++){
    color += hex[(Math.floor(Math.random() * 16))]
  }
  return color;
};

// console.log(randomColor());

// Now we have to generate a random value
// we can use Math.random

// console.log(Math.random() * 16);  // we want 0 that's why we are not adding 1 to it.

// console.log(Math.floor(Math.random() * 16));

let intervalId;
const startChangingColor = function () {
  // Applying safety check
  if (!intervalId){
    intervalId = setInterval(changeBgColor, 1000);
  }
  
  // how to change background color take access of document in document take access of style and in style choose backgroundColor. 
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }

};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;                  // good practice while coding
};



document.querySelector('#start').addEventListener
('click', startChangingColor);

document.querySelector('#stop').addEventListener
('click', stopChangingColor);

// Tip --> In leetcode - dsa - cp think about edge cases.
// and in project do projects + think about corner cases.

```