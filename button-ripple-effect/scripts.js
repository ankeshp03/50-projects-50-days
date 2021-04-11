var rippleBtnEl = document.querySelector(".ripple-btn");

rippleBtnEl.addEventListener("click", showRippleEffect);

function showRippleEffect(event) {
  if (!event.target.classList.contains("ripple-btn")) return;
  createRipple(event);
  animateRipple();
  removeRipple();
}

function createRipple(event) {
  var ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.setProperty("top", `${event.layerY - 2.5}px`);
  ripple.style.setProperty("left", `${event.layerX - 2.5}px`);
  rippleBtnEl.append(ripple);
}

function animateRipple() {
  setTimeout(() => {
    var ripples = rippleBtnEl.querySelectorAll(".ripple");
    var lastRipple = ripples[ripples.length - 1];
    lastRipple.classList.add("animate");
  }, 1);
}

function removeRipple() {
  setTimeout(() => {
    var ripple = rippleBtnEl.querySelector(".ripple");
    if (ripple) ripple.remove();
  }, 500);
}
