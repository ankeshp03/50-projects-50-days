var pageEls = document.querySelectorAll(".page");
var messageEl = document.querySelector(".message");
var startBtnEl = document.querySelector(".start-btn");
var timeEl = document.querySelector(".time-container .time");
var scoreEl = document.querySelector(".score-container .score");
var insectsContainerEl = document.querySelector(".insects-container");
var insectCatchContainerEl = document.querySelector(".insect-catch-container");
var score = "";
var seconds = 0;
var imgSize = 100;
var selectedInsect = "";

startBtnEl.addEventListener("click", startGame);
insectsContainerEl.addEventListener("click", playGame);
insectCatchContainerEl.addEventListener("click", handleInsectClick);

function startGame() {
  pageEls[0].classList.add("up");
}

function playGame(event) {
  var clickedBtn = event.target.closest(".select-insect-btn");
  if (!clickedBtn) return;

  selectedInsect = clickedBtn.querySelector(".insect-img");
  setGameboard();
  pageEls[1].classList.add("up");
}

function setGameboard() {
  setInterval(setTime, 1000);
  addInsect();
}

function setTime() {
  var secs = seconds % 60;
  var mins = Math.floor(seconds / 60);
  seconds++;
  timeEl.innerText = `${mins < 10 ? "0" : ""}${mins} : ${
    secs < 10 ? "0" : ""
  }${secs}`;
}

function handleInsectClick(event) {
  var insectEl = event.target;
  if (!insectEl.classList.contains("insect-img")) return;
  setScore();
  showMessage();
  insectEl.style.setProperty(
    "transform",
    `${insectEl.style.transform} scale(0)`
  );
  setTimeout(() => {
    insectEl.remove();
  }, 500);
  setTimeout(addInsect, 1500);
  setTimeout(addInsect, 1000);
}

function addInsect() {
  var imgEl = document.createElement("img");
  imgEl.classList.add("insect-img");
  imgEl.src = selectedInsect.src;
  imgEl.alt = selectedInsect.alt;
  imgEl.style.setProperty(
    "transform",
    `translate(${getRandomPosition()}) rotate(${getRandomRotation()})`
  );

  insectCatchContainerEl.appendChild(imgEl);
}

function setScore() {
  score++;
  scoreEl.innerText = score;
}

function getRandomPosition() {
  var posX = Math.floor(
    Math.random() * (insectCatchContainerEl.clientWidth - imgSize - 1)
  );
  var posY = Math.floor(
    Math.random() * (insectCatchContainerEl.clientHeight - imgSize - 1)
  );
  return `${posX}px, ${posY}px`;
}

function getRandomRotation() {
  return `${Math.floor(Math.random() * 360)}deg`;
}

function showMessage() {
  if (score === 20) {
    messageEl.classList.add("show");
  }
}
