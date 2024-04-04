// main.js
function init(){
  console.log("hello world!");
}

init()
//setup function that calls to page and switches it with another
//setup
const button = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.cards');
const content = document.querySelectorAll('.content');
const visible = document.querySelectorAll('.visible');
const hidden = document.querySelectorAll('.hidden');
//Event Listeners
button.forEach(function(btn)) {
btn.addEventListener("click", handleEvent);
}


//setup for linking to other page's
