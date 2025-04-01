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