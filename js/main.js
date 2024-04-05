// Function to show a specific page and hide others
function showPage(pageNumber) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
      page.classList.add('hidden');
  });

  // Show the page with the specified number
  const currentPage = document.getElementById(`page${pageNumber}`);
  if (currentPage) {
      currentPage.classList.remove('hidden');
  }
}

// Initialize the application
function init() {
  // Show the first page initially
  showPage(1);

  // Add event listeners to all buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
          // Show the next page when a button is clicked
          showPage(index + 2); // Move to the next page (index + 2 because index is 0-based)
      });
  });
}

// Call init function when the page is loaded
window.onload = init;

