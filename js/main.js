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
window.onload = function() {
	document.addEventListener('click', function(e) {
	  document.getElementById("page1").id = 'page2';
	  document.getElementById("page2").id ="page1";
	})
};