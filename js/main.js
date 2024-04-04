// main.js
let currentPageIndex = 0;
let cards = document.querySelectorAll('.card');
let button = document.querySelectorAll('.button');


function showPage() {
  cards(currentPageIndex).classList.remove('visible');
  currentPageIndex++;
  if (currentPageIndex >= cards.length) {
    currentPageIndex = 0;
  }
  cards(currentPageIndex).classList.add('visible');
}