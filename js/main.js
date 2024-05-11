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

// Get references to buttons
const startButton = document.getElementById('startButton');
const nextButton2 = document.getElementById('nextButton2');
const nextButton3 = document.getElementById('nextButton3');
const nextButton4 = document.getElementById('nextButton4');
const nextButton5 = document.getElementById('nextButton5');
const startOverButton = document.getElementById('startOverButton');

// Get references to views
const view1 = document.getElementById('view1');
const view2 = document.getElementById('view2');
const view3 = document.getElementById('view3');
const view4 = document.getElementById('view4');
const view5 = document.getElementById('view5');
const view6 = document.getElementById('view6');

// Event listeners for button clicks
startButton.addEventListener('click', function() {
    switchView(view1, view2);
});

nextButton2.addEventListener('click', function() {
    switchView(view2, view3);
});

startOverButton.addEventListener('click', function() {
    switchView(view3, view1);
});

nextButton3.addEventListener('click', function() {
    switchView(view3, view4);
});

nextButton4.addEventListener('click', function() {
    switchView(view4, view5);
});

nextButton5.addEventListener('click', function() {
    switchView(view5, view6);
});

startOverButton.addEventListener('click', function() {
    switchView(view6, view1);
}); 

// Function to switch between views
function switchView(currentView, nextView) {
    currentView.classList.remove('visible');
    nextView.classList.add('visible');
}
