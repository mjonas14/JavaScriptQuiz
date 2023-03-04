// Function that starts the qiuz

// Function that gets the question from the predefined data type of questions (maybe array)

// function that handles the on click event

// Declaring questions
let jsQuestion = [
  'What notation is used to define an array in JavaScript?', 
  'True or false: The value of a const variable cannot be changed after it is defined.', 
  'True or false, if an object is defined using const, the key value pair cannot be updated after the fact.', 
  'Using jQuery, how do we declare a new html element?', 
  'What is the correct syntax for adding a JavaScript file to html?'
];

let jsOption = [
  ['a. var firstArray = {a,b,c,d};', 
   'b. var firstArray = (a,b,c,d);', 
   'c. var firstArray = [a,b,c,d];', 
   'd. var firstArray = a,b,c,d;'], 
  ['a. True', 
   'b. False'], 
  ['a. True', 
   'b. False'], 
  ["a. var headerEl = ${‘<h1>’};", 
  "b. var headerEl = $(‘<h1>’);", 
  "c. var headerEl = document.newElement(‘<h1’);",
  "d. var headerEl = window.addNewElement(‘h1’);"], 
  ['a. <script src=”myscript.js”><script>', 
   'b. <script href=”myscript.js”><script>', 
   'c. <file src=”myscript.js”><file>', 
   'd. <file href=”myscript.js”><file>']
]

let jsAnswer = [
  'c', 
  'a', 
  'b', 
  'b', 
  'a'
]

const startButton = document.querySelector("#start-btn");
const optionButon = document.querySelector('#buttons');
var qOptionsEls = document.querySelector("#options");
var op1 = document.querySelector('.btn1');
var op2 = document.querySelector('.btn2');
var op3 = document.querySelector('.btn3');
var op4 = document.querySelector('.btn4');
var timeEl = document.querySelector(".time");

let qNumber = 0;
let score = 0;
var secondsLeft = 60;

let title = document.querySelector(".welcome-title");
let body = document.querySelector(".welcome-body");





// When start button is clicked, everything should vanish and timer should start
function start() {

  // event.preventDefault();
  title.textContent = '';
  body.textContent = '';
  startButton.style.display = "none";

  // Start timer
  startTime();
  generateQuestion();
};





// Starts quiz and runs through questions
function generateQuestion() {

  qOptionsEls.style.display = "flex";
  qOptionsEls.style.flexDirection = "column";
  qOptionsEls.style.alignItems = "center";

  // Display first question 
  body.textContent = jsQuestion[qNumber];

  op1.textContent = jsOption[qNumber][0];
  op2.textContent = jsOption[qNumber][1];
  op3.textContent = jsOption[qNumber][2];
  op4.textContent = jsOption[qNumber][3];
}

function inputInitials() {

  qOptionsEls.style.display = 'none';
  body.textContent = 'Please input your intials';

  var formEl = document.createElement('form');
  var inputEl = document.createElement('input');
  var submitEl = document.createElement('button');

  inputEl.classList.add('input');
  submitEl.classList.add('submit');
  submitEl.textContent = 'Submit';

  body.appendChild(formEl);
  formEl.appendChild(inputEl);
  formEl.appendChild(submitEl);
}




function startTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = 'Time Remaining: ' + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
        }
    
      }, 1000);
}





startButton.addEventListener('click', start);
qOptionsEls.addEventListener('click', function(event) {
    
  console.log(event.target.textContent);

  let answer = event.target.textContent;

  if (answer[0] === jsAnswer[qNumber]) {
    console.log('right');
    score++;

    if (qNumber === jsQuestion.length-1) {
      inputInitials();
    } else {
      qNumber++;
      generateQuestion();
    }

  } else {
    console.log('wrong');
    secondsLeft -= 10;

    if (qNumber === jsQuestion.length-1) {
      inputInitials();
    } else {
      qNumber++;
      generateQuestion();
    }

  }

})
