var textEl = document.querySelector(".text");
var textPillContainerEl = document.querySelector(".text-pill-container");

textEl.addEventListener("keyup", createTextPill);

function createTextPill(event) {
  if (event.key === "Enter") {
    randomizePillSelection();
    return;
  }
  var textList = event.target.value.split(",");
  var pillEls = textList.map((text) =>
    text.trim().length > 0
      ? `<span class="text-pill">${text.trim()}</span>`
      : ""
  );
  textPillContainerEl.innerHTML = pillEls.join("");
}

function randomizePillSelection() {
  clearTextField();
  var interval = setInterval(() => {
    var selectedPill = getRandomPill();
    if (!selectedPill) {
      clearInterval(interval);
      return;
    }
    highlightSelectedPill(selectedPill);

    setTimeout(() => {
      setTimeout(() => removeHighlight(selectedPill), 100);
    });
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    highlightSelectedPill(getRandomPill());
  }, 3000);
}

function clearTextField() {
  textEl.value = "";
}

function getRandomPill() {
  var pills = textPillContainerEl.querySelectorAll(".text-pill");
  var randomIndex = Math.floor(Math.random() * pills.length);
  return pills[randomIndex];
}

function highlightSelectedPill(pill) {
  pill.classList.add("selected");
}

function removeHighlight(pill) {
  pill.classList.remove("selected");
}
