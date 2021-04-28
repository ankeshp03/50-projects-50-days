const replayBtnEl = document.querySelector(".reply-btn");
const replayContainerEl = document.querySelector(".replay-container");
const countdownNumbersEl = document.querySelectorAll(".countdown span");
const countdownContainerEl = document.querySelector(".countdown-container");

window.addEventListener("load", animateCountdown);
replayBtnEl.addEventListener("click", restartAnimation);

function animateCountdown() {
  countdownNumbersEl.forEach((num, idx) => {
    num.addEventListener("animationend", (e) => {
      if (
        e.animationName === "countdownStart" &&
        idx !== countdownNumbersEl.length - 1
      ) {
        num.classList.remove("start");
        num.classList.add("end");
      } else if (e.animationName === "countdownEnd" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("start");
      } else {
        countdownContainerEl.classList.add("hidden");
        replayContainerEl.classList.add("show");
      }
    });
  });
}

function reset() {
  countdownContainerEl.classList.remove("hidden");
  replayContainerEl.classList.remove("show");

  countdownNumbersEl.forEach((num) => {
    num.classList.value = "";
  });

  countdownNumbersEl[0].classList.add("start");
}

function restartAnimation() {
  reset();
  animateCountdown();
}
