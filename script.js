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
const selectedAnswer = document.querySelector('input[name="answer"]:checked');
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

let currentQuestion = 0;

const quizQues = () => {
  currentQuestion = Math.floor(Math.random() * questionAndAnswer.length);

  ques.innerHTML = questionAndAnswer[currentQuestion].ques;
  option1.innerHTML = questionAndAnswer[currentQuestion].options[0];
  option2.innerHTML = questionAndAnswer[currentQuestion].options[1];
  option3.innerHTML = questionAndAnswer[currentQuestion].options[2];
  option4.innerHTML = questionAndAnswer[currentQuestion].options[3];

  answer1.value = questionAndAnswer[currentQuestion].options[0];
  answer2.value = questionAndAnswer[currentQuestion].options[1];
  answer3.value = questionAndAnswer[currentQuestion].options[2];
  answer4.value = questionAndAnswer[currentQuestion].options[3];
};

quizQues();

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (!selectedAnswer) {
    console.log("Please select an answer");
    return;
  }

  const options = [option1, option2, option3, option4];

  const selectedIndex = [answer1, answer2, answer3, answer4].indexOf(
    selectedAnswer,
  );

  if (
    selectedAnswer.value === questionAndAnswer[currentQuestion].correctAnswer
  ) {
    options[selectedIndex].style.backgroundColor = "green";
    options[selectedIndex].style.color = "white";
  } else {
    options[selectedIndex].style.backgroundColor = "red";
    options[selectedIndex].style.color = "white";
  }

  quizQues();
});
