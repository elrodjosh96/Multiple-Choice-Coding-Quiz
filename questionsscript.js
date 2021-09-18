var timer = document.querySelector("#countdown")
var startButton = document.querySelector(".start-button")

var timer; 
var timerCount;

function countdown() {
    console.log('clicked');
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timer.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timer.textContent = 0;
            clearInterval(timeInterval);
        }
    }, 200);
}

startButton.addEventListener('click', countdown)