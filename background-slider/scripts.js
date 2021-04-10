var bodyEl = document.body;
var containerEl = document.querySelector(".container");
var slideEls = containerEl.querySelectorAll(".slide");
var slideCount = 5;
var currentSlide = 1;
var btnIncrementorMapping = {
  "left-btn": -1,
  "right-btn": 1
};
containerEl.addEventListener("click", changeSlide);

function changeSlide(event) {
  var btn = event.target.closest(".btn");
  if (!btn) return;
  var slideToGo = getSlideToGo(btn.id);
  containerEl.querySelector(".slide.active").classList.remove("active");
  var currentSlideEl = slideEls[slideToGo];
  currentSlideEl.classList.add("active");
  bodyEl.style.setProperty(
    "background-image",
    currentSlideEl.style.backgroundImage
  );
}

function getSlideToGo(btnId) {
  var incrementor = btnIncrementorMapping[btnId];
  var slideValue = (currentSlide % slideCount) + incrementor;
  currentSlide = slideValue > 0 ? slideValue : slideCount + slideValue;

  return currentSlide - 1;
}
