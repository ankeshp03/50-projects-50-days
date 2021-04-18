var msg = "We Love Programming!";
var rate = 1;
var interval = null;
var currentChar = 0;
var msgEl = document.querySelector(".msg");
var speedEl = document.querySelector("#speed");

window.addEventListener("load", animateMsgDisplay);
speedEl.addEventListener("input", restartAnimation);

function restartAnimation(event) {
  rate = event.target.value;
  clearInterval(interval);
  animateMsgDisplay();
}

function animateMsgDisplay() {
  var msgLength = msg.length;
  interval = setInterval(() => {
    msgEl.innerText = msg.slice(0, currentChar);
    currentChar = (currentChar % msgLength) + 1;
  }, 250 / rate);
}
