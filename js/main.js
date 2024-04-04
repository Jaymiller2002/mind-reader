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
$(document).ready(
  function() {
    $(".btn").click(function() {
      $(".hidden_div").show("slow");
      $("#page1").hide("slow");
      $($this).show("slow");
    });

    $(".btn").click(function() {
      $(".hidden_div").hide("slow");
      $("#page2").show("slow");
      $($this).hide("slow");

    });
  });