// main.js
let currentPageIndex = 1; // Start with page 1

function showTheNextPage() {
  console.log("current page start", currentPageIndex)
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
    console.log("showing next page", currentPageIndex)
    showNextPage(currentPageIndex);
}

function showNextPage(pageNumber) {
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

//Number generator
function generateNumbers() {
  let minNumber = 0; // The minimum number you want
  let maxNumber = 100; // The maximum number you want
  let randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
  document.getElementById("number").innerHTML = randomnumber; // Sets content of <div> to number
  return false; // Returns false just to tidy everything up
}

window.onload = generateNumbers; // Runs the function on click

//Random symbol generator


//Any event listeners

