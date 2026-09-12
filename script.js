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
  {
    ques: "Which programming language is mainly used to add interactivity to web pages?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correctAnswer: "JavaScript",
  },
  {
    ques: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>",
  },
  {
    ques: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    correctAnswer: "color",
  },
  {
    ques: "Which symbol is used to select a class in CSS?",
    options: ["#", ".", "@", "*"],
    correctAnswer: ".",
  },
  {
    ques: "Which symbol is used to select an ID in CSS?",
    options: [".", "#", "@", "$"],
    correctAnswer: "#",
  },
  {
    ques: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    ques: "Which method is used to add an item to the end of a JavaScript array?",
    options: ["push()", "pop()", "shift()", "add()"],
    correctAnswer: "push()",
  },
  {
    ques: "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "const",
  },
  {
    ques: "Which operator is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    correctAnswer: "===",
  },
  {
    ques: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Document Order Method",
      "Digital Object Model",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    ques: "Which HTML tag is used to display an image?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    correctAnswer: "<img>",
  },
  {
    ques: "Which CSS property is used to change the background color?",
    options: ["background-color", "bg-color", "color", "background"],
    correctAnswer: "background-color",
  },
  {
    ques: "Which of these is NOT a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Character"],
    correctAnswer: "Character",
  },
  {
    ques: "Which command is commonly used to create a new React application with Vite?",
    options: [
      "npm create vite@latest",
      "npm start react",
      "react new app",
      "npm install react-app",
    ],
    correctAnswer: "npm create vite@latest",
  },
  {
    ques: "Which React hook is commonly used to manage state?",
    options: ["useState", "useRoute", "useData", "useStyle"],
    correctAnswer: "useState",
  },
  {
    ques: "Which React hook is commonly used for side effects?",
    options: ["useEffect", "useAction", "useSideEffect", "useChange"],
    correctAnswer: "useEffect",
  },
  {
    ques: "Which HTTP status code usually means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    correctAnswer: "404",
  },
  {
    ques: "Which HTTP status code usually means a successful request?",
    options: ["200", "404", "500", "401"],
    correctAnswer: "200",
  },
  {
    ques: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Application Process Integration",
      "Advanced Programming Internet",
      "Automated Program Interface",
    ],
    correctAnswer: "Application Programming Interface",
  },
  {
    ques: "Which technology is commonly used to store data in a relational database?",
    options: ["SQL", "HTML", "CSS", "JSON"],
    correctAnswer: "SQL",
  },
];

const ques = document.querySelector(".h1");
const submit = document.querySelector("form");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");
const correction = document.querySelector(".h");

let currentQuestion = 0;
const resetOptions = () => {
  const options = [option1, option2, option3, option4];

  options.forEach((option) => {
    option.style.backgroundColor = "";
    option.style.color = "";
  });

  const answers = [answer1, answer2, answer3, answer4];

  answers.forEach((answer) => {
    answer.checked = false;
  });

  correction.innerHTML = "";
  correction.style.backgroundColor = "";
  correction.style.color = "";
};

const quizQues = () => {
  resetOptions();
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
    correction.innerHTML = `Please Choose an option`;
    correction.style.color = "red";
      setTimeout(() => {
    correction.innerHTML = "";
    correction.style.color = "";
  }, 2000);
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
    correction.innerHTML = "Correct!";
    correction.style.backgroundColor = "green";
    correction.style.color = "white";
  } else {
    options[selectedIndex].style.backgroundColor = "red";
    options[selectedIndex].style.color = "white";
    correction.innerHTML = `Correct answer: ${questionAndAnswer[currentQuestion].correctAnswer}`;
    correction.style.backgroundColor = "red";
    correction.style.padding = "4px";
    correction.style.color = "white";
  }

  setTimeout(() => {
    quizQues();
  }, 1500);
});
