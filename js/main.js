// main.js
//let currentPageIndex = 1; // Start with page 1

//function showTheNextPage() {
  //console.log("current page start", currentPageIndex)
    //switch (currentPageIndex) {
      //  case 1:
//            currentPageIndex = 2;
//            break;
//        case 2:
//            currentPageIndex = 3;
//            break;
  //      case 3:
    //        currentPageIndex = 4;
      //      break;
        //case 4:
          //  currentPageIndex = 5;
            //break;
        //case 5:
          //  currentPageIndex = 6;
            //break;
        //case 6:
          //  currentPageIndex = 1; // Restart from page 1
            //break;
        //default:
          //  currentPageIndex = 1;
    //}
    //console.log("showing next page", currentPageIndex)
    //showNextPage(currentPageIndex);
//}

//function showNextPage(pageNumber) {
    // Hide all pages
  //  const pages = document.querySelectorAll('.page');
    //pages.forEach(page => {
      //  page.classList.add('hidden');
    //});

   // Show the page with the specified number
   //const currentPage = document.getElementById(`page${pageNumber}`);
    //if (currentPage) {
     //  currentPage.classList.remove('hidden');
   // }
//}

//Number generator
//function generateNumbers() {
  //let minNumber = 0; // The minimum number you want
  //let maxNumber = 100; // The maximum number you want
  //let randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
  //document.getElementById("number").innerHTML = randomnumber; // Sets content of <div> to number
  //return false; // Returns false just to tidy everything up
//}

//window.onload = generateNumbers; // Runs the function on click

//Random symbol generator


//Any event listeners

// Define initial variables
let currentView = 1;
const symbols = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6', 'icon7', 'icon8', 'icon9'];

// Function to render the current view
function renderView() {
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.add('hidden');
    });

    const currentViewElement = document.getElementById(`view${currentView}`);
    currentViewElement.classList.remove('hidden');

    if (currentView === 2) {
        renderSymbolOptions();
    } else if (currentView === 3) {
        renderChosenSymbol();
    }
}

// Function to render symbol options
function renderSymbolOptions() {
    const symbolOptionsContainer = document.querySelector('.symbol-options');
    symbolOptionsContainer.innerHTML = '';
    symbols.forEach(symbol => {
        const symbolElement = document.createElement('div');
        symbolElement.classList.add('symbol-option');
        symbolElement.innerHTML = `<i class="fas fa-${symbol}"></i>`;
        symbolElement.addEventListener('click', () => {
            document.getElementById('chosen-symbol').innerHTML = `<i class="fas fa-${symbol}"></i>`;
        });
        symbolOptionsContainer.appendChild(symbolElement);
    });
}

// Function to move to the next view
function moveToNextView() {
    currentView++;
    if (currentView > 3) {
        currentView = 3;
    }
    renderView();
}

// Function to reset to the first view
function resetToFirstView() {
    currentView = 1;
    renderView();
}

// Initial rendering of the first view
renderView();