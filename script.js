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


//Variables from the new divs created in html
startBtn.addEventListener("click", startQuiz);
var start = document.getElementById("#start");
var quiz = document.getElementById("#questcontainer");
var question = document.getElementById("#question");
var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")


//Function that lists all my questions and answers
var questions = [
    {
        question: "DB9 is a model of what car make?",
        choiceA: "Ferrari",
        choiceB: "Bentley",
        choiceC: "Aston Martin",
        choiceD: "Rolls Royce",
        correct: "C"
    },
    {
        question: "What is the most expensive American car ever sold?",
        choiceA: "Shelby GT 500",
        choiceB: "Shelby Cobra",
        choiceC: "Shelby Mustang",
        choiceD: "Crown Victoria",
        correct: "B"
    },
    {
        question: "How much horsepower is in a Bugatti Veyron?",
        choiceA: "800",
        choiceB: "400",
        choiceC: "1000",
        choiceD: "700",
        correct: "C"
    },
    {
        question: "Which of the following cars are illegal in the USA?",
        choiceA: "Nissan GTR",
        choiceB: "Alfa Romeo",
        choiceC: "McLaren Senna",
        choiceD: "Nissan Skyline",
        correct: "D"
    },
    {
        question: "What size engine is in a Bugatti Veyron?",
        choiceA: "8.0L V12",
        choiceB: "8.0L V14",
        choiceC: "10.0L V16",
        choiceD: "8.0L V16",
        correct: "D"
    }
];

//Indexes
index[0].question
answers[0].correct
questions[0].choiceA
questions[0].choiceB
questions[0].choiceC
questions[0].choiceD


//Question Render & Function
var questionfive = questions.length - 1;
let currentQuestion = 0;

function renderQuestion() {
    var quest = questions[currentQuestion];
    question.innerHTML = "<p>" + quest.question + "</p>";
    choiceA.innerHTML = quest.choiceA;
    choiceB.innerHTML = quest.choiceB;
    choiceC.innerHTML = quest.choiceC;
    choiceD.innerHTML = quest.choiceD;
}

currentQuestion = 0;
renderQuestion();
//This will help return the next question once the user selects an answer
currentQuestion++
renderQuestion();


//Functions that will allow the buttons to turn green or red depending on the answer. Green for correct and red for incorrect
function correctAnswer() {
    document.getElementById(currentQuestion).style.backgroundColor = "green";
}

function wrongAnswer() {
    document.getElementById(currentQuestion).style.backgroundColor = "red";
}


//My VARIABLES
var score = 0;
var count = 0;
var seconds = 60;
var countEl = document.querySelector("#time");

//


//Countdown Timer Variable & the function/equation
// function countdown() {
//     var timerInt = setInterval(function() {
//         seconds--;
//         countEl.textContent = "Timer " + seconds;

//         if (seconds === 0) {
//             clearInterval(timerInt);
//             alert("Times UP!");
//         }
//     }, 1000);
// }

// countdown();


//Function that adds score when the correct answer is selected
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


//Functions & variables to make content appear/disappear upon click
var startPage = document.getElementById("#startquiz");
var questOne = document.getElementById("#questionone");
var questTwo = document.getElementById("#questiontwo");
var questThree = document.getElementById("#questionthree");
var questFour = document.getElementById("#questionfour");
var questFive = document.getElementById("#questionfive");
var startBtn = document.getElementById("#start");


function start() {
    startPage.style.display = "none";
    questOne.style.display = "block";

    countdown();
}


function showContent() {
    var questOne = document.getElementById("#questionone");
    if (questOne.style.display === "none") {
        questOne.style.display = "block";
    } else {
        questOne.style.display = "none";
    }
}