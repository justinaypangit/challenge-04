var timerEl = document.querySelector(".timer-count");
var timeOut;
var timeTotal;
var startButton = document.querySelector(".start-button");
// create score board elements
var scoreEl = document.querySelector(".score");
var score = 0;
var scoreTotal;
// create questions element
var question = 0;
var rightAns = 0;
var questions = [
    {
        question: "Which one of these is not used in building a web application?",
        answer: "B. Python",
        answers: ["A. CSS", "B. Python", "C. JavaScript", "D. HTML"]
    },
    {
        question: "What percentage of websites used JavaScript?",
        answer: "A. Over 90%",
        answers: ["A. Over 90%", "B. 10%", "C. 50%", "D. 25%"]
    },
    {
        question: "Whay symbol do you input at the end of most lines of syntax?",
        answer: "B. ;",
        answers: ["A. :", "B. ;", "C. }", "D. ]"]
    },
    {
        question: "Is JavaScript and Java the same language?",
        answer: "False",
        answers: ["True", "False"]
    },
    {
        question: "Which HTML element do we insert the JavaScript file?",
        answer: "C. <script>",
        answers: ["A. <p>", "B. <link>", "C. <script>", "D. <js>"] 
    },
];
// create question variables
var questionTitle = document.querySelector(".questionTitle");
var answerA = document.getElementById("b0");
var answerB = document.getElementById("b1");
var answerC = document.getElementById("b2");
var answerD = document.getElementById("b3");
var answerE = document.getElementById("b4");
var checkAnswer = document.getElementById("checkAns");
// create right answer and wrong answer variables

// create function to run questions
var startQuiz = function() {
    
}
// create function on correct answer
// create function on wrong answer
// create function on finished questions
// create function on running out of time
// create function on results
// create timer function