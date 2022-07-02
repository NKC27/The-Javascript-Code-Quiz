const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 10;

  seconds = seconds < 1 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
// AskBCS Provided solution
let questions = [
  {
    question: "JavaScript is a ___ -side programming language?",
    choice1: "1. Client",
    choice2: "2. Server",
    choice3: "3. Both",
    choice4: "4. None of the above",
    answer: 3,
  },
  {
    question:
      "Which of the following will write the message “Hello World!” in an alert box?",
    choice1: "alertBox(“Hello World!”);",
    choice2: "alert(“Hello World!”);",
    choice3: "alert(Hello World!).message;",
    choice4: "messageAlert(“Hello World!”);",
    answer: 2,
  },
  {
    question: "Is Javascript the same as Java?",
    choice1: "1. yes they are the same thing",
    choice2: "2. no it is different from JavaScript",
    choice3: "3. none of the above",
    choice4: "4. all of the above",
    answer: 2,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "1. JavaScript",
    choice2: "2. terminal/bash",
    choice3: "3. for loops",
    choice4: "4. console log",
    answer: 4,
  },
];

// Learning Assistant commented out fetch statement

// fetch("../questions.json")
//   .then((res) => {
//     return res.json();
//   })
//   .then((loadedQuestions) => {
//     questions = loadedQuestions;
//     startGame();
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("../The-Javascript-Code-Quiz/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    } else {
      if (classToApply === "incorrect") {
        time = -05;
      }
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

// Learning Assistant provided function call due to commented out fetch statement

startGame();
