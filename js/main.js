// main.js
let currentPageIndex = 1; // Start with page 1

function showNextPage() {
    switch (currentPageIndex) {
        case 1:
            currentPageIndex = 2;
            break;
        case 2:
            currentPageIndex = 3;
            break;
        case 3:
            currentPageIndex = 4;
            break;
        case 4:
            currentPageIndex = 5;
            break;
        case 5:
            currentPageIndex = 6;
            break;
        case 6:
            currentPageIndex = 1; // Restart from page 1
            break;
        default:
            currentPageIndex = 1;
    }
    showPage(currentPageIndex);
}

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

