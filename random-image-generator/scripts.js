var imageCount = 15;
var api = "https://source.unsplash.com/random/";
var containerEl = document.querySelector(".container");

window.addEventListener("load", loadImages);

function loadImages() {
  var imageEls = Array(imageCount).fill().map(getImageEl);
  containerEl.innerHTML = imageEls.join("");
}

function getImageEl() {
  var size = getImageSize();
  return `<img src="${api}${size}">`;
}

function getImageSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
