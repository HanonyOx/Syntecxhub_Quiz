const questionAndAnswer = [
  {
    ques: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    ques: "Which language is primarily used to structure a web page?",
    options: ["CSS", "JavaScript", "HTML", "Python"],
    correctAnswer: "HTML",
  },
  {
    ques: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    ques: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
];

const ques = document.querySelector(".h1");
const submit = document.querySelector("form");

let currentQuestion = 0;

const quizQues = () => {
    currentQuestion = Math.floor(Math.random() * questionAndAnswer.length)

  ques.innerHTML = questionAndAnswer[currentQuestion].ques;

};

quizQues();

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  currentQuestion++;

  quizQues();
});