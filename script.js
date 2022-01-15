var questions = [{
    question: 'JavaScript is a ___ -side programming language?',
    answers: ['Client', 'Server', 'Both'],
    correct: '3'
}, 
{
    question: 'Which of the following will write the message “Hello World!” in an alert box?',
    answers: ['alertBox(“Hello World!”);', 'alert(“Hello World!”);', ' alert(Hello DataFlair!);'],
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

var questionHeader = document.getElementById('current-question')
var questionAnswersSection = document.getElementById('question-answers')


//Function to be called to start the quiz
function startQuiz(){
    console.log('Quiz has begun')//hide the start screen
    startPage.setAttribute('class', 'hide')//reveal the question screen   
    questionsPage.removeAttribute('class')
    
    //start a timer
    var el = document.getElementById("timer"),
  mins = 0,
  secs = 75;

function countDown() {
  if (secs || mins) {
    setTimeout(countDown, 550); // 
  }
  timer.innerHTML = mins + ":" + (secs.toString().length < 2 ? "0" + secs : secs); // Pad number
  secs -= 1;
  if (secs < 0) {
    mins -= 0;
    secs = 75;
  }

  function displayNextQuestion(question) {
    //
    
    // this func will take index position 
    //grab ques from array use contents of that to update the page

  }
}

countDown();
    //assign the value of the 'timer' to the timer space in the html

    //start the questions
    startAskingQuestions()
}

function startAskingQuestions(){
    // get the current question object from within questions array
    var currentQ = questions[questionIndex]
    //set the question being asked inside the h3 element in the html
    questionHeader.textContent = currentQ.question;
    //clear down old answers buttons from div in html
    questionAnswersSection.innerHTML = ''; 
    //create buttons for each possible answer to current question 
    currentQ.answers.forEach(function(answer){
        //create the html element for each button in the answers array
        var answerBtn = document.createElement('button');

        //give the button above a value of the element function is running for 
        answerBtn.setAttribute('value', answer)
        //add styling class to the button as well
        //TODO: add styling for the button below
        answerBtn.setAttribute('class', 'answerBtn')
        //set text content of button as the answer
        answerBtn.textContent = answer;
        //set an event listener on the button which checks the selection
        answerBtn.onclick = checkAnswer; 

        //add the button to the html div within questions section
        questionAnswersSection.appendChild(answerBtn)
    })
}

function checkAnswer(){
    console.log("Checking answer.....")
    console.log('Button clicked:', this)
    console.log('Answer selected:', this.value)
    
    if (this.value === questionAnswersSection) {
      alert("Correct!");
    } else {
      alert("Sorry incorrect!");
    }
      //  block of code to be executed if the condition is true
    }
      // time checker
      
    
    //check that the answer is correct  - if not, take time off timer, if correct, fine
  
    //increment currentIndex

    //then we can check if currentIndex is same as length of questions


    // if it is - end quiz

    //if it isnt - call next question again 


function endQuiz(){
    //hides everything else

    //shows end page

    //allows user to enter initials etc. 
}

startQuizBtn.onclick = startQuiz; 
