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
      // Add event listener to the button on the current page
      const nextPageButton = currentPage.querySelector('.btn');
      if (nextPageButton) {
          nextPageButton.addEventListener('click', () => {
              // Show the next page when the button is clicked
              const nextPageNumber = pageNumber + 1;
              showPage(nextPageNumber);
          });
      }
  }
}

