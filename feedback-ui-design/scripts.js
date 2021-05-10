var containerEl = document.querySelector(".container");
var reviewBtnEl = document.querySelector(".review-btn");
var feedbackEls = document.querySelectorAll(".feedback");
var feedbackIndex = feedbackEls.length - 1;

window.addEventListener("load", setDefaultFeedback);
reviewBtnEl.addEventListener("click", sendFeedback);

function setDefaultFeedback() {
  feedbackEls[feedbackIndex].classList.add("active");
  for (let i = 0; i < feedbackEls.length; i++) {
    feedbackEls[i].addEventListener("click", () => setFeedback(i));
  }
}

function setFeedback(index) {
  feedbackIndex = index;
  document.querySelector(".feedback.active").classList.remove("active");
  feedbackEls[index].classList.add("active");
}

function sendFeedback() {
  var feedback = feedbackEls[feedbackIndex].querySelector(".label").innerText;
  containerEl.innerHTML = `
  <i class="feedback-icon fa fa-heart"></i>
  <h4>Thank You!</h4>
  <h4>Feedback: ${feedback}</h4>
  <p class="info">We'll use your feedback to improve our customer support</p>`;
}
