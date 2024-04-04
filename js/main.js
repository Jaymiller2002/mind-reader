// main.js
function showPage(pageNumber) {
  // Hide all pages
  for (let i = 1; i <= 6; i++) {
    let page = document.getElementById('page1' + i);
    if (page) {
      page.style.display = 'none';
    }
  }
  // Show the requested page
  let currentPage = document.getElementById('page2' + pageNumber);
  if (currentPage) {
    currentPage.style.display = 'block';
  }
}