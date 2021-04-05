var containerEl = document.querySelector(".container");
var closeButtonEl = document.querySelector(".close-button");

closeButtonEl.addEventListener("click", toggleNavShow);

function toggleNavShow() {
  containerEl.classList.toggle("close");
}
