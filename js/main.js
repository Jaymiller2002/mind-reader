// main.js

// Function to show a specific page and hide others
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

// Initialization
function init() {
  console.log("SPA Initialized");
  // Initially show the first page
  showPage(1);
}

// Call init function when the page is loaded
window.onload = init;

