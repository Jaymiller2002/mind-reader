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
const submitMathButton = document.getElementById('submitMathButton');
const submitRiddleButton = document.getElementById('submitRiddleButton');
const startOverButton = document.getElementById('startOverButton');
const restartButton = document.getElementById('restartButton'); // New restart button

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

submitMathButton.addEventListener('click', function() {
    switchView(view4, view5);
});

submitRiddleButton.addEventListener('click', function() {
    switchView(view5, view6);
});

startOverButton.addEventListener('click', function() {
    switchView(view6, view1);
}); 

restartButton.addEventListener('click', function() {
    switchView(view6, view1);
}); 

// Function to switch between views
function switchView(currentView, nextView) {
    currentView.classList.remove('visible');
    nextView.classList.add('visible');
    // Store the current view in localStorage
    localStorage.setItem('currentView', nextView.id);
}

// Function to generate random symbol options
function generateSymbolOptions() {
    const symbols = [
        '❤️', '☘️', '⚡️', '✨', '☁️', '☀️', '❄️', '⭐️', '✈️', '⚓️',
        '☎️', '☂️', '☕️', '⚽️', '⚾️', '🏀', '🏈', '🎾', '🏐', '🏉',
        '🎱', '🎳', '🏏', '🏒', '🥅', '🏑', '🏸', '🏓', '🏋️‍♂️', '🏋️‍♀️',
        '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️', '🤸‍♂️', '🤸‍♀️', '🤽‍♂️', '🤽‍♀️', '🏄‍♂️', '🏄‍♀️',
        '🏇', '🏊‍♂️', '🏊‍♀️', '🚣‍♂️', '🚣‍♀️', '🏌️‍♂️', '🏌️‍♀️', '🏹', '🎣', '🥊',
        '🥋', '⛷️', '🏂', '🏋️‍♂️', '🤼‍♂️', '🤼‍♀️', '🤸‍♂️', '⛹️‍♂️', '⛹️‍♀️', '🤺', '🤾‍♂️',
        '🤾‍♀️', '🏌️‍♂️', '🏌️‍♀️', '🏄‍♂️', '🏄‍♀️', '🏊‍♂️', '🏊‍♀️', '🤽‍♂️', '🤽‍♀️', '🚣‍♂️', '🚣‍♀️',
        '🧗‍♂️', '🧗‍♀️', '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️', '🏇', '🏂', '🏋️‍♂️', '🏋️‍♀️', '🤼‍♂️',
        '🤼‍♀️', '🤸‍♂️', '🤸‍♀️', '⛹️‍♂️', '⛹️‍♀️', '🤾‍♂️', '🤾‍♀️', '🏌️‍♂️', '🏌️‍♀️', '🏄‍♂️', '🏄‍♀️',
        '🏊‍♂️', '🏊‍♀️', '🤽‍♂️', '🤽‍♀️', '🚣‍♂️', '🚣‍♀️', '🧗‍♂️', '🧗‍♀️', '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️'
    ];

    const symbolOptionsContainer = document.querySelector('.symbol-options');
    symbolOptionsContainer.innerHTML = ''; // Clear previous options

    // Shuffle symbols array
    for (let i = symbols.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [symbols[i], symbols[j]] = [symbols[j], symbols[i]];
    }

    symbols.forEach(function(symbol) {
        const button = document.createElement('button');
        button.textContent = symbol;
        button.onclick = function() {
            document.getElementById('chosen-symbol').textContent = symbol;
            switchView(view2, view3);
        };
        symbolOptionsContainer.appendChild(button);
    });
}

// Generate symbol options when view2 is displayed
view2.addEventListener('click', function() {
    generateSymbolOptions();
});

// Check if current view is stored in localStorage and display it
window.onload = function() {
    const currentViewId = localStorage.getItem('currentView');
    if (currentViewId) {
        const currentView = document.getElementById(currentViewId);
        const visibleView = document.querySelector('.view.visible');
        if (visibleView) {
            visibleView.classList.remove('visible');
        }
        if (currentView) {
            currentView.classList.add('visible');
        }
    }
};

// Inside view4 event listener
const calculateButton4 = document.getElementById('calculateButton4');
calculateButton4.addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const total1 = num1 + num2;
    document.getElementById('total').textContent = `Total: ${total1}`;
    switchView(view4, view5); // Transition to the next view after calculation
});

// Inside view5 event listener
const calculateButton5 = document.getElementById('calculateButton5');
calculateButton5.addEventListener('click', function() {
    const riddleAnswer = document.getElementById('riddleAnswer').value.toLowerCase(); // Convert answer to lowercase for case-insensitive comparison
    if (riddleAnswer === 'echo') { // Check if the answer is correct
        switchView(view5, view6); // Transition to view6 if the answer is correct
    } else {
        alert('Sorry, that is incorrect. Please try again.'); // Display an alert for incorrect answer
    }
});

// Inside view6 event listener
submitRiddleButton.addEventListener('click', function() {
    switchView(view5, view6); // Transition to view6
    const symbol = document.getElementById('chosen-symbol').textContent;
    document.getElementById('symbol-and-total').textContent = `Your chosen symbol is: ${symbol}`; // Update the display message
});
