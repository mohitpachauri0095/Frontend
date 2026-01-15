const quotes = [
  "Practice makes a man perfect",
  "JavaScript makes websites interactive",
  "Typing speed improves with daily practice",
  "Never stop learning new skills"
];

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");

let time = 60;
let timer;
let correctChars = 0;
let totalChars = 0;

function startTest() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.innerHTML = "";

  randomQuote.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    quoteEl.appendChild(span);
  });

  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();

  time = 60;
  timeEl.innerText = time;
  correctChars = 0;
  totalChars = 0;

  timer = setInterval(updateTime, 1000);
}

function updateTime() {
  time--;
  timeEl.innerText = time;

  if (time === 0) {
    clearInterval(timer);
    inputEl.disabled = true;
    calculateWPM();
  }
}

inputEl.addEventListener("input", () => {
  const quoteChars = quoteEl.querySelectorAll("span");
  const typedChars = inputEl.value.split("");

  correctChars = 0;
  totalChars = typedChars.length;

  quoteChars.forEach((char, index) => {
    if (typedChars[index] == null) {
      char.classList.remove("correct", "incorrect");
    } else if (typedChars[index] === char.innerText) {
      char.classList.add("correct");
      char.classList.remove("incorrect");
      correctChars++;
    } else {
      char.classList.add("incorrect");
      char.classList.remove("correct");
    }
  });

  calculateAccuracy();
});

function calculateAccuracy() {
  let accuracy = totalChars === 0 ? 100 : (correctChars / totalChars) * 100;
  accuracyEl.innerText = accuracy.toFixed(0);
}

function calculateWPM() {
  let wordsTyped = correctChars / 5;
  wpmEl.innerText = Math.round(wordsTyped);
}

function resetTest() {
  clearInterval(timer);
  quoteEl.innerHTML = "";
  inputEl.value = "";
  inputEl.disabled = true;
  timeEl.innerText = 60;
  wpmEl.innerText = 0;
  accuracyEl.innerText = 100;
}
