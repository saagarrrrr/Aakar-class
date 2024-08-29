const questions = [
  {
    question: "When was the first Valentine’s Day?",
    answers: [
      { answerText: "1988 AD", correct: false },
      { answerText: "789 AD", correct: false },
      { answerText: "496  AD", correct: true },
      { answerText: "1370 AD", correct: false },
    ],
  },

  {
    question: "What's the national flower of Japan?",
    answers: [
      { answerText: "Aara Aara", correct: false },
      { answerText: "Arigato Rose", correct: false },
      { answerText: "Morning Glory.", correct: false },
      { answerText: "Cherry Blossom", correct: true },
    ],
  },

  {
    question: "What's the national animal of Australia?",
    answers: [
      { answerText: "Car", correct: false },
      { answerText: "Buffalo", correct: false },
      { answerText: "Rhino", correct: false },
      { answerText: "Kangaroo", correct: true },
    ],
  },

  {
    question: "Who is your favriout actor?",
    answers: [
      { answerText: "Allu Arjun", correct: true },
      { answerText: "Selmon Khan", correct: false },
      { answerText: "Kim Jong Un", correct: false },
      { answerText: "Johhny Deep", correct: false },
    ],
  },
  {
    question: "Who is your favriout actor?",
    answers: [
      { answerText: "Allu Arjun", correct: true },
      { answerText: "Selmon Khan", correct: false },
      { answerText: "Kim Jong Un", correct: false },
      { answerText: "Johhny Deep", correct: false },
    ],
  },
  {
    question: "Who is your favriout actor?",
    answers: [
      { answerText: "Allu Arjun", correct: true },
      { answerText: "Selmon Khan", correct: false },
      { answerText: "Kim Jong Un", correct: false },
      { answerText: "Johhny Deep", correct: false },
    ],
  },
  {
    question: "Who is your favriout actor?",
    answers: [
      { answerText: "Allu Arjun", correct: true },
      { answerText: "Selmon Khan", correct: false },
      { answerText: "Kim Jong Un", correct: false },
      { answerText: "Johhny Deep", correct: false },
    ],
  },
  {
    question: "Who is your favriout actor?",
    answers: [
      { answerText: "Allu Arjun", correct: true },
      { answerText: "Selmon Khan", correct: false },
      { answerText: "Kim Jong Un", correct: false },
      { answerText: "Johhny Deep", correct: false },
    ],
  },
  {
    question: "Who is your favriout actor?",
    answers: [
      { answerText: "Allu Arjun", correct: true },
      { answerText: "Selmon Khan", correct: false },
      { answerText: "Kim Jong Un", correct: false },
      { answerText: "Johhny Deep", correct: false },
    ],
  },
  {
    question: "Who is the most powerfull leader in the world?",
    answers: [
      { answerText: "Modi", correct: false },
      { answerText: "Putin", correct: true },
      { answerText: "Kim Jung Un", correct: false },
      { answerText: "Xi Jinping", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const ansBtnsContainer = document.getElementById("ans-ko-container");
const nextButton = document.getElementById("nxt-btn");
const questionStatus = document.getElementById("footer");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  questionStatus.style.display = "block";
  showQuestion();
}
function showQuestion() {
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML =
    questionNo + ". " + questions[currentQuestionIndex].question;
  const currentAnswers = questions[currentQuestionIndex].answers;

  resetAnswers();
  currentAnswers.forEach((answer) => {
    const ansBtn = document.createElement("button");
    ansBtn.innerHTML = answer.answerText;
    ansBtn.classList.add("ansbt");
    ansBtnsContainer.appendChild(ansBtn);
    if (answer.correct) {
      ansBtn.dataset.correct = answer.correct;
    }
    ansBtn.addEventListener("click", selectAnswer);
  });
}
function resetAnswers() {
  nextButton.style.display = "none";
  while (ansBtnsContainer.firstChild) {
    ansBtnsContainer.removeChild(ansBtnsContainer.firstChild);
  }
}
function selectAnswer(e) {
  nextButton.style.display = "block";
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(ansBtnsContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      resetAnswers();
      questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
      questionStatus.style.display = "none";
    }
  } else {
    startQuiz();
  }
});

startQuiz();

// const questions = [
//     {
//         question: "this is question 1",
//         answers: [
//             { answerText: "answer1", correct: false },
//             { answerText: "answer2", correct: false },
//             { answerText: "answer3", correct: true },
//             { answerText: "answer4", correct: false }
//         ]
//     },

//     {
//         question: "this is question 2",
//         answers: [
//             { answerText: "answer1", correct: false },
//             { answerText: "answer2", correct: false },
//             { answerText: "answer3", correct: false },
//             { answerText: "answer4", correct: true }
//         ]
//     },

//     {
//         question: "this is question 3",
//         answers: [
//             { answerText: "answer1", correct: true },
//             { answerText: "answer2", correct: false },
//             { answerText: "answer3", correct: false },
//             { answerText: "answer4", correct: false }
//         ]
//     },

//     {
//         question: "this is question 4",
//         answers: [
//             { answerText: "answer1", correct: true },
//             { answerText: "answer2", correct: false },
//             { answerText: "answer3", correct: false },
//             { answerText: "answer4", correct: false }
//         ]
//     },

//     {
//         question: "this is question 5",
//         answers: [
//             { answerText: "answer1", correct: false },
//             { answerText: "answer2", correct: true },
//             { answerText: "answer3", correct: false },
//             { answerText: "answer4", correct: false }
//         ]
//     },
// ]

// let currentQuestionIndex = 0;
// let score = 0;

// const nextButton = document.getElementById("btn-next");
// const questionElement = document.getElementById("question");
// const ansBtnsContainer = document.getElementById("answer-Btns-container");
// const questionStatus = document.getElementById("last-text");

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     questionStatus.style.display = "block";
//     showQuestion();
// }
//  function showQuestion(){

//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + questions[currentQuestionIndex].question;

//     const currentAnswers = questions[currentQuestionIndex].answers;

//     resetAnswers()
//     // questions[currentQuestionIndex].answers.forEach
//     currentAnswers.forEach(answer => {

//         const ansBtn = document.createElement("button");

//         ansBtn.innerHTML = answer.answerText;

//         ansBtn.classList.add("ans-btn");

//         ansBtnsContainer.appendChild(ansBtn);

//         if(answer.correct){
//             ansBtn.dataset.correct = answer.correct;
//         }

//         ansBtn.addEventListener("click", selectAnswer);

//     })

//  }

//  function selectAnswer(e){
//     nextButton.style.display = "block";

//     const selectedBtn = e.target;

//     const isCorrect = selectedBtn.dataset.correct === "true";

//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }
//     else{
//         selectedBtn.classList.add("incorrect");
//     }

//     Array.from(ansBtnsContainer.children).forEach(button => {
//         if(button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });

//  }

//  nextButton.addEventListener("click", ()=> {

//      if(currentQuestionIndex < questions.length) {

//         currentQuestionIndex++;
//         if(currentQuestionIndex < questions.length) {
//             showQuestion();
//         } else {
//             // showScore();
//             resetAnswers();
//             questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

//             nextButton.innerHTML = "Play Again";
//             nextButton.style.display = "block";
//             questionStatus.style.display = "none";
//         }
//     } else {
//         startQuiz();
//     }

// });

//  function resetAnswers(){
//     nextButton.style.display = "none";

//     while(ansBtnsContainer.firstChild){
//         ansBtnsContainer.removeChild(ansBtnsContainer.firstChild);
//     }
//  }

//  startQuiz();
