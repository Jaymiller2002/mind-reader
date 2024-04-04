// main.js
function init(){
  console.log("hello world!");
}

init();

// Get all elements with class 'showPage' (i.e., all the buttons)
let buttons = document.querySelectorAll('.showPage');

// Loop through each button and add event listener
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let currentPage = this.parentElement.parentElement.parentElement; // Get the parent div of the button (i.e., the current page)
    let nextPage = currentPage.nextElementSibling || document.getElementById('page1'); // Get the next page or loop back to the first page if it's the last one
    currentPage.style.display = 'none'; // Hide the current page
    nextPage.style.display = 'block'; // Show the next page
  });
});