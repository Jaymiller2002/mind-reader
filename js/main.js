// main.js
function showPage(pageNumber) {
  // Hide all pages
  for (let i = 1; i <= 6; i++) {
    let page = document.getElementById('page' + i);
    if (page) {
      page.classList.add('hidden');
    }
  }
  // Show the requested page
  let currentPage = document.getElementById('page' + pageNumber);
  if (currentPage) {
    currentPage.classList.remove('hidden');
    currentPage.classList.add('visible');
  }
}