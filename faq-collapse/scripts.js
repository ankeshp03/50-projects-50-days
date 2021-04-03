var questionListEl = document.querySelector(".question-list");

questionListEl.addEventListener("click", toggleQuestionDisplay);

function toggleQuestionDisplay(event) {
  if (!event.target.classList.contains("toggle-button")) return;
  var currentQuestion = event.target.closest(".question-list-item");
  currentQuestion.classList.toggle("show");
}
