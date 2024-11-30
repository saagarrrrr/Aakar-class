const questions = [
  {
    question: "What is your favrouit car?",
    ans: [
      { answerText: "aToyota Land Crusior", correct: false },
      { answerText: "BMW 7 series", correct: false },
      { answerText: "Porche", correct: true },
      { answerText: "Tata Nano", correct: false },
    ],
  },

  {
    question: "What is your father put is your name?",
    ans: [
      { answerText: "Ram", correct: false },
      { answerText: "Shyam", correct: false },
      { answerText: "Hari", correct: false },
      { answerText: "Geeta", correct: true },
    ],
  },

  {
    question: "this is question 3",
    ans: [
      { answerText: "answer1", correct: true },
      { answerText: "answer2", correct: false },
      { answerText: "answer3", correct: false },
      { answerText: "answer4", correct: false },
    ],
  },

  {
    question: "this is question 4",
    ans: [
      { answerText: "answer1", correct: true },
      { answerText: "answer2", correct: false },
      { answerText: "answer3", correct: false },
      { answerText: "answer4", correct: false },
    ],
  },

  {
    question: "this is question 5",
    ans: [
      { answerText: "answer1", correct: false },
      { answerText: "answer2", correct: true },
      { answerText: "answer3", correct: false },
      { answerText: "answer4", correct: false },
    ],
  },
];
let currentQuestionIndex = 0;
let score = 0;

const questionPaper = document.getElementById("que");
const nextButton = document.getElementById("nxt-btn");
const anselement = document.getElementById("ans-ko-container");
const questionElement = document.getElementById("question-status");

// questionPaper.innerHTML = questions[currentQuestionIndex].question;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
  nextButton.innerHTML = "Next";
}

function showQuestion() {
  let questionNo = currentQuestionIndex + 1;
  questionPaper.innerHTML =
    questionNo + ". " + questions[currentQuestionIndex].question;
    resetAnswers();
  const currentAnswers = questions[currentQuestionIndex].ans;
  currentAnswers.forEach((ans) => {
    const ansbt = document.createElement("button");
    ansbt.innerHTML = ans.answerText;
    ansbt.classList.add("ansbt");
    anselement.appendChild(ansbt);
  });
}
function resetAnswers() {
  while (anselement.firstChild) {
    anselement.removeChild(anselement.firstChild);
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      nextButton.innerHTML = "Play Again";
    }
  } else {
    startQuiz();
  }
});
startQuiz();
