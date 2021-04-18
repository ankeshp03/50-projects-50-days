var buttonsContainerEl = document.querySelector(".buttons-container");

var currentContent = 0,
  contentCount = 4;

buttonsContainerEl.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
  if (event.target.closest(".scroll-top")) {
    currentContent = (currentContent + 1) % contentCount;
  } else if (event.target.closest(".scroll-bottom")) {
    currentContent = (currentContent < 1 ? contentCount : currentContent) - 1;
  }
  document.body.style.setProperty("--current-content", currentContent);
}
