// Function that starts the qiuz

// Function that gets the question from the predefined data type of questions (maybe array)

// function that handles the on click event

const startButton = document.querySelector("#start-btn");
var timeEl = document.querySelector(".time");

// When start button is clicked, everything should vanish and timer should start
startButton.addEventListener('click', function() {

    var title = document.querySelector(".welcome-title");
    var body = document.querySelector(".welcome-body");

    title.textContent = '';
    body.textContent = '';
    startButton.style.display = "none";

    // Start timer
    startTime();

});

var secondsLeft = 60;

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
