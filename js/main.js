// main.js
function init(){
  console.log("hello world!");
}

init()
//setup function that calls to page and switches it with another


//setup

function myFunction(){
  Object.addEventListener("click", myFunction());
  document.getElementById(".style").style.display = "page2";
}