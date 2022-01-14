var questions = [{
    question: 'what is the answer to Q1?',
    answers: ['1', '2', '3'],
    correct: '1'
}, 
{
    question: 'what is the answer to Q2?',
    answers: ['1', '2', '3'],
    correct: '2'
},
{
    question: 'what is the answer to Q3?',
    answers: ['1', '2', '3'],
    correct: '3'
}
];
var questionIndex = 0; 


//bringing in references to html elements using document

var startQuizBtn = document.getElementById('startbtn')
var startPage = document.getElementById("startpage")
var questionsPage = document.getElementById('quiz')
var answersSection = document.getElementById('questions');



//Function to be called to start the quiz
function startQuiz(){
    console.log('Quiz has begun')
    //hide the start screen
    startPage.setAttribute('class', 'hide')
    //reveal the question screen
    questionsPage.removeAttribute('class')
    //start a timer

    //assign the value of the 'timer' to the timer space in the html

    //start the questions
    startAskingQuestions()
}

startAskingQuestions(){
    // get the current question object from within questions array

    //set the question being asked inside the h3 element in the html

    //clear down old answers buttons from div in html

    //create buttons for each possible answer to current question 
}













startQuizBtn.onclick = startQuiz; 
