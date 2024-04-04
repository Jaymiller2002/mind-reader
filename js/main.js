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


//Event Listeners
button.forEach(function(btn)) {
btn.addEventListener("click", handleEvent);
}
//setup for linking to other page's
let visible = document.getElementById('.visible');

visible.onclick = function() {
  let div = document.getElementById('page2');
  if (div.style.display !== 'none') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'block';
  }
};