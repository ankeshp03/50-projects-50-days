var codeEls = document.querySelectorAll(".code");
var notAllowedChars = ["E", "e", ".", "-", "+"];

window.addEventListener("load", initCodeInput);

function initCodeInput() {
  codeEls[0].focus();
  for (let i = 0; i < codeEls.length; i++) {
    codeEls[i].addEventListener("keydown", (event) => changeFocus(event, i));
    codeEls[i].addEventListener("input", (event) => putValue(event, i));
  }
}

function changeFocus(event, index) {
  if (event.key === "Backspace") {
    event.target.classList.remove("valid");
    setTimeout(() => {
      var prevEl = codeEls[index - 1];
      if (prevEl) {
        prevEl.focus();
      }
    }, 10);
  }
}

function putValue(event, index) {
  if (event.target.value.length > 1) {
    event.target.value = event.data;
  }
  if (isValid(event.data)) {
    event.target.classList.add("valid");
    var nextEl = codeEls[index + 1];
    if (nextEl) {
      nextEl.focus();
    }
  } else {
    event.target.value = "";
  }
}

function isValid(input) {
  return input && !isNaN(input) && notAllowedChars.indexOf(input) === -1;
}
