// main.js
document.getElementById('showPage2').addEventListener('click', function() {
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
});

document.getElementById('showPage3').addEventListener('click', function() {
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'block';
});

document.getElementById('showPage4').addEventListener('click', function() {
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'block';
});

document.getElementById('showPage5').addEventListener('click', function() {
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'block';
});

document.getElementById('showPage6').addEventListener('click', function() {
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page6').style.display = 'block';
});

document.getElementById('showPage1').addEventListener('click', function() {
  document.getElementById('page6').style.display = 'none';
  document.getElementById('page1').style.display = 'block';
});
function init(){
  console.log("hello world!");
}

init()