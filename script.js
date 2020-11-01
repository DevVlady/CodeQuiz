//TODO:
//Create a variable for countdown timer
//Create a variable to keep track of the leaderboard
//Click START to begin quiz
//Once the start button is clicked the timer will begin and the first question will be prompted
//Each page will have a heading which contains a the question
//Each page will have 4 buttons which will contain answers to the question asked
//If the wrong answer is selected then 10 seconds will be deducted from the countdown timer
//Each correct answer will add 10 points to the users scoresheet
//Right or wrong alert will be displayed when the user selects an answer
//A loop will be created where this will happen 5 times
//On the final page text will be desplayed letting the user know the quiz is complete
//On the 2nd to last page the user will have a screen displayed letting the user know the quiz is complete
//The user will have an input provided where they will be asked to input their initials
//Once the user neters their initials they will have a submit button they will need to click to continue
//The timer will be stopped on the 2nd to last page
//Once the user hits submit button they will be taken to the next page which will display the scores & initials of the the users
//This page will only display the text "Lederboard"
//The user will have 2 buttons they can click on
//One of the buttons is "GO BACK" which will take them to the main page
//The other button they will have as an option to click on is "CLEAR LEADERBOARD"
//Clicking on the "LEADERBOARD" will erase all the users scores & and their initials from the leaderboard


//My VARIABLES
var seconds = 60;
var countEl = document.querySelector("#time");


//Countdown Timer Variable & the function/equation
function countdown() {
    var timerInt = setInterval(function() {
        seconds--;
        countEl.textContent = "Timer " + seconds;

        if (seconds === 0) {
            clearInterval(timerInt);
            alert("Times UP!");
        }
    }, 1000);
}

countdown();


//Function that adds socre when the correct answer is selected
var tracker = document.querySelector("#tracker");
var addScore = document.querySelector("#aston");
var addScore2 = document.querySelector("#cobra");
var addScore3 = document.querySelector("#thousand");
var addScore4 = document.querySelector("#skyline");
var addScore5 = document/querySelector("#liter");

var track = localStorage.getItem("track");

tracker.textContent = track;

//Function to add score for the the first question
addScore.addEventListener("click", function() {
    track++;
    tracker.textContent = track;

    localStorage.setItem("track", track);
})

//Function to add score for the the second question
addScore2.addEventListener("click", function() {
    track++;
    tracker.textContent = track;

    localStorage.setItem("track", track);
})

//Function to add score for the the third question
addScore3.addEventListener("click", function() {
    track++;
    tracker.textContent = track;

    localStorage.setItem("track", track);
})

//Function to add score for the the fourth question
addScore4.addEventListener("click", function() {
    track++;
    tracker.textContent = track;

    localStorage.setItem("track", track);
})

//Function to add score for the the fifth question
addScore5.addEventListener("click", function() {
    track++;
    tracker.textContent = track;

    localStorage.setItem("track", track);
})