var timer = document.querySelector("#countdown")
var startButton = document.querySelector(".start-button")
var questions = [{
    question: "What does CSS stand for?",
    answers: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Cool Style Sheets"
        ], 
    correctAnswer: "Cascading Style Sheets",
}, {
    question: "What is the correct syntax for linking a JavaScript file?",
    answers: [
        "script",
        "link.JS",
        "JS.linkscript"
        ], 
    correctAnswer: "script",
}, {
    question: "In JavaScript, what is the element called in quotes?",
    answers: [
        "array",
        "string",
        "boolean"
        ], 
    correctAnswer: "string",
}, {
    question: "What is a Boolean?",
    answers: [
        "string",
        "array",
        "true or false"
        ], 
    correctAnswer: "true or false",
}, {
    question: "How do you write a FOR loop?",
    answers: [
        "for (i = 0; i <= 5)",
        "for (i = 0; i <= 5; i++)",
        "for (i = 0; i <= 5)"
        ], 
    correctAnswer: "for (i = 0; i <= 5; i++)",
}]
var questionNum = 0;

var questionList = document.querySelector("#questions");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var scoreTracker = 0;

var timeLeft = 75;
var timerCount;

function countdown() {
    console.log('clicked');
    

    var timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timer.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timer.textContent = 0;
            clearInterval(timeInterval);
        }
    }, 1000);
}

startButton.addEventListener('click', function() {
    countdown();
    displayQuestion();
})

function displayQuestion() {
    console.log(questions[questionNum].question)
    questionList.innerHTML = questions[questionNum].question
    answerOne.innerHTML = questions[questionNum].answers[0]
    answerTwo.innerHTML = questions[questionNum].answers[1]
    answerThree.innerHTML = questions[questionNum].answers[2]
    console.log(questions[questionNum].answers[0])
    questionNum++;
    if (questionNum > questions.length) {
        displayScore()
    }
    // if statement
    //got to questions at [i] 
    //display question
    //display answers
    //for loop for answers(answers.length)
    //event delegation
    //answer checking
}
//for (var i=0; i < questions.length; i++) { 
function displayScore() {


    // display the score, show record score button
    // record score button will have highScore() as callback
}
answerOne.addEventListener('click', function(event) {
    checkAnswers(event.target.innerHTML);
    displayQuestion();

})
answerTwo.addEventListener('click', function(event) {
    checkAnswers(event.target.innerHTML);
    displayQuestion();
    
})
answerThree.addEventListener('click', function(event) {
    checkAnswers(event.target.innerHTML);
    displayQuestion();
    
})

function checkAnswers(userAnswer) {
    if (questions[questionNum -1].correctAnswer === userAnswer) {
        scoreTracker++;
        console.log(scoreTracker)
    } else {
        timeLeft = timeLeft -5;
        timer.textContent = timeLeft;
        console.log(timeLeft)
        
    }
}
//points formula needed
//function wrap up game
//display button submits highscore, delegate event(event listener)
function highScoreFunction() {
    const currentHighScore = localStorage.getItem('highscore')||0;
    if (score > parseInt(currentHighScore)) {
        localStorage.setItem('highscore', timeLeft)
    }
}
