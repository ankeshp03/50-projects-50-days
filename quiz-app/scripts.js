var questionList = [
  {
    question: "Which language runs in a web browser?",
    answer: "d",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    answer: "b",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats"
  },
  {
    question: "What does HTML stand for?",
    answer: "a",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis"
  },
  {
    question: "What year was JavaScript launched?",
    answer: "b",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above"
  }
];

var selectedOptions = [];
var currentQuestionIndex = 0;

var questionContainerEl = document.querySelector(".question-container");
var submitBtn = document.querySelector(".card button");

window.addEventListener("load", loadQuestion);
submitBtn.addEventListener("click", saveAnswer);

function loadQuestion() {
  var questionEl = getQuestion(currentQuestionIndex);
  display(questionEl);
}

function display(el) {
  questionContainerEl.innerHTML = el;
}

function getQuestion(index) {
  var { question, a, b, c, d } = questionList[index];
  return `
    <h2 class="question">${question}</h2>
    <div class="options-container">
      <div class="option">
        <input type="radio" id="option-1" name="answer" value="a" />
        <label for="option-1">${a}</label>
      </div>
      <div class="option">
        <input type="radio" id="option-2" name="answer" value="b" />
        <label for="option-2">${b}</label>
      </div>
      <div class="option">
        <input type="radio" id="option-3" name="answer" value="c" />
        <label for="option-3">${c}</label>
      </div>
      <div class="option">
        <input type="radio" id="option-4" name="answer" value="d" />
        <label for="option-4">${d}</label>
      </div>
    </div>
  `;
}

function saveAnswer(event) {
  if (event.target.innerText === "Reload") {
    reload();
  }
  var answer = document.querySelector("input[name='answer']:checked");
  if (!answer) return;
  currentQuestionIndex++;
  selectedOptions.push(answer.value);
  if (currentQuestionIndex === questionList.length) {
    evaluate();
  } else {
    loadQuestion();
  }
}

function evaluate() {
  var correctAnswerCount = 0;
  questionList.forEach((question, idx) => {
    correctAnswerCount += question.answer === selectedOptions[idx] ? 1 : 0;
  });
  showResult(correctAnswerCount);
}

function showResult(count) {
  var resultEl = `<h2 class="question">You answered ${count}/4 questions correctly</h2>`;
  display(resultEl);
  submitBtn.innerText = "Reload";
}

function reload() {
  currentQuestionIndex = 0;
  selectedOptions = [];
  submitBtn.innerText = "Submit";
  loadQuestion();
}
