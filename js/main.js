// main.js
function init(){
  console.log("hello world!");
}

init()
//setup function that calls to page and switches it with another
//setup
const button = document.querySelectorAll('.button');
const cards = document.querySelectorAll('.cards');
const content = document.querySelectorAll('.content');
const div = document.querySelectorAll('.div')
//Event Listeners
button.addEventListener("click", ()=> {
div.classList.toggle('div');
})
//setup for linking to other page id's
