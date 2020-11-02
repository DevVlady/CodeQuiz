//TODO:
//Create a variable for countdown timer
//Create a variable to keep track of the leaderboard
//Click START to begin quiz
//Once the start button is clicked the timer will begin and the first question will be prompted
//Each page will have a heading which contains a the question
//Each page will have 4 buttons which will contain answers to the question asked
//If the wrong answer is selected then 10 seconds will be deducted from the countdown timer
//Each correct answer will add 1 point to the users scoresheet
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



//TODO:Third Code

//Variables & indexes
var seconds = 60;
var score = 0;
var mainIndex =0;
var leaderBoard;

//Function that lists all my questions and answers
let questions = [
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


//Variables obtained from html file
var mainpageEl = document.getElementById("mainpage");
var startBtn = document.getElementById("go");
var timeEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");

//Timer function
function countdown() {
    var timerInt = setInterval(function() {
        seconds--;
        timeEl.textContent = "Timer " + seconds;

        if (seconds === 0) {
            clearInterval(timerInt);
            // alert("Times UP!");
        }
    }, 1000);
}

countdown();

//Event listener for the button/s
startBtn.addEventListener("click", quizStarted);

//Function to render the questions upon clicking the start button
function renderQuestions () {
    var questionsLength = questions.length - 1;
    if (mainIndex <= questionsLength) {
        document.getElementById("quest").innerHTML = questions[mainIndex].question;
        renderOptionChoices();
    }
    else {
        alert("The quiz has ended!");
    }
}

console.log(renderQuestions);


//Function to begin the quiz upon clicking start
function quizStarted () {
    mainpageEl.style.display = "none";
    questionsEl.style.display = "block";

    //Adding the countdown upon clicking start
    countdown();
    renderQuestions();
}

console.log(quizStarted);

//Function to display the list of questions
function renderOptionChoices () {
    let quest = questions[mainIndex].question;
    // let quest = questions[mainIndex].choiceB;
    // let quest = questions[mainIndex].choiceC;
    // let quest = questions[mainIndex].choiceD;

    for (var i = 0; i < questions.length; i++) {
    var multiplechoiceOption = document.getElementById("multiplechoice");
    var multiplechoiceBtns = document.createElement("button");

    multiplechoiceBtns.innerHTML = quest[i];
    multiplechoiceBtns.className = "btn btnOption btn-md btn-outline-secondary d-flex justify-content-around";
    multiplechoiceBtns.setAttribute("onclick", "correctAnswer(" + mainIndex +", " + i + ");");
    multiplechoiceOption.append(multiplechoiceBtns);
    }
    finishLine();
}

//Function to check the answer right from wrong














//TODO: Second Code-------------------------------------------------------------------------------------

//Variables from the new divs created in html
// var start = document.getElementById("#start");
// var quiz = document.getElementById("#questcontainer");
// var question = document.getElementById("#question");
// var choiceA = document.getElementById("A")
// var choiceB = document.getElementById("B")
// var choiceC = document.getElementById("C")
// var choiceD = document.getElementById("D")
// var choices = document.getElementById("#choices");



//Indexes
questions[0].question
answer[0].correct
questions[0].choiceA
questions[0].choiceB
questions[0].choiceC
questions[0].choiceD


//Question Render & Function
// var questionFive = questions.length - 1;
// let currentQuestion = 0;

// function renderQuestion() {
//     var quest = questions[currentQuestion];
//     // question.innerHTML = "<p>" + quest.question + "</p>";
//     choiceA.innerHTML = quest.choiceA;
//     choiceB.innerHTML = quest.choiceB;
//     choiceC.innerHTML = quest.choiceC;
//     choiceD.innerHTML = quest.choiceD;
// }

// console.log(renderQuestion);

// currentQuestion = 0;
// renderQuestion();
//This will help return the next question once the user selects an answer
// currentQuestion++
// renderQuestion();


//Functions that will allow the buttons to turn green or red depending on the answer. Green for correct and red for incorrect
// function correctAnswer() {
//     document.getElementById(currentQuestion).style.backgroundColor = "green";
// }

// function wrongAnswer() {
//     document.getElementById(currentQuestion).style.backgroundColor = "red";
// }




//Function to check answer & add to score
// function checkAnswer(answer) {
//     if (answer[currentQuestion].correct == answer) {
//         score++;
//         correctAnswer();
//     } else {
//         wrongAnswer();
//     }
//     if (currentQuestion < questionFive) {
//         count = 0;
//         currentQuestion++;
//         renderQuestion();
//     } else {
//         clearInterval(timeEl);
//         scoreRender();
//     }
// }

//Function to start the quiz
// start.addEventListener("click", startQuiz);


// function startQuiz() {
//     start.style.display = "none";
//     timeRender();
//     timeEl = setInterval(timeRender, 1000);
//     renderQuestion();
//     quiz.style.display = "block";
// }
