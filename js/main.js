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

//setup for linking to other page id's
document.getElementsById('page1').addEventListener("click", myFunction());
function myFunction(){
  document.getElementById('page1').innerHTML = myFunction();
}