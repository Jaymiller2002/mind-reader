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
button.forEach(function(btn));{
btn.addEventListener("click", handleEvent);
}

//setup for linking to other page's
document.getElementById("page1").addEventListener("click", someFunction);


//functions
function showPage(pageNumber) {
  // Hide all pages
  const pages = document.querySelectorAll('.hidden');
  pages.forEach(page => {
      page.classList.add('hidden');
  });

  // Show the page with the specified number
  const currentPage = document.getElementById(`page${pageNumber}`);
  if (currentPage) {
      currentPage.classList.remove('hidden');
  }
}

