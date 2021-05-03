var carouselEl = document.querySelector(".carousel");
var prevBtnEl = document.querySelector(".prev-btn");
var nextBtnEl = document.querySelector(".next-btn");

var autoSlideInterval = 0;
var currentSlide = 0;
var carouselWidth = 500;

window.addEventListener("load", initiateSlider);
prevBtnEl.addEventListener("click", changeSlide);
nextBtnEl.addEventListener("click", changeSlide);

function initiateSlider() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(startSlide, 2000);
}

function startSlide() {
  currentSlide = (currentSlide + 1) % 4;
  carouselEl.style.setProperty(
    "transform",
    `translateX(-${carouselWidth * currentSlide}px)`
  );
}

function changeSlide(event) {
  if (event.target.closest(".prev-btn")) {
    currentSlide = (currentSlide - 2) % 4;
    currentSlide = currentSlide < -1 ? 2 : currentSlide;
    startSlide();
    initiateSlider();
  } else {
    startSlide();
    initiateSlider();
  }
}
