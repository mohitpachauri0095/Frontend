const quizData = [
  {
    question: "HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "High Text Machine Language",
    c: "Hyperlinks Text Mark Language",
    d: "None",
    correct: "a"
  },
  {
    question: "Which language is used for styling?",
    a: "HTML",
    b: "JQuery",
    c: "CSS",
    d: "XML",
    correct: "c"
  },
  {
    question: "JavaScript is a ___ language?",
    a: "Markup",
    b: "Programming",
    c: "Styling",
    d: "Database",
    correct: "b"
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const timeEl = document.getElementById('time');

let currentQuiz = 0;
let score = 0;
let time = 10;
let timer;


function loadQuiz() {
  deselectAnswers();
  resetTimer();

  const currentData = quizData[currentQuiz];
  questionEl.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
}


function resetTimer() {
  clearInterval(timer);
  time = 10;
  timeEl.innerText = time;

  timer = setInterval(() => {
    time--;
    timeEl.innerText = time;

    if (time === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}


function getSelected() {
  let answer;
  answerEls.forEach(ans => {
    if (ans.checked) answer = ans.id;
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach(ans => ans.checked = false);
}


function nextQuestion() {
  const answer = getSelected();
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showResult();
  }
}


function showResult() {
  quiz.innerHTML = `
    <h2>Your Score: ${score}/${quizData.length}</h2>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}


submitBtn.addEventListener('click', nextQuestion);


loadQuiz();
