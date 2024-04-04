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
const pages = ['page1', 'page2']
//Event Listeners
button.forEach(function(btn)){
btn.addEventListener("click", handleEvent);
}


//setup for linking to other page id's
let next = document.getElementById('next'); // your DOM element

next.addEventListener('click', function() {

  var current = location.page1, // current page ie. MedTech.html
      idx = pages.indexOf( current ); // find page in pages array

  // go to next page if page exists
  // otherwise go to first page   
  if ( idx > -1 ) {
    location.page1 = pages[ ++idx ] || pages[0];
  }

});