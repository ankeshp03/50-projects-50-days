var counterEl = document.querySelector(".counter");
var imageContainerEl = document.querySelector(".image-container");

var counter = 0;

imageContainerEl.addEventListener("dblclick", likeImage);

function likeImage(event) {
  if (event.target.classList.contains("double-click-heart")) return;
  counterEl.innerText = ++counter;

  var likeIconPos = {
    top: event.layerY,
    left: event.layerX
  };

  imageContainerEl.innerHTML = `<i class="double-click-heart fas fa-heart" style="top: ${likeIconPos.top}px; left: ${likeIconPos.left}px"></i>`;

  var likeIconEl = imageContainerEl.querySelector(".double-click-heart");

  setTimeout(() => likeIconEl.classList.add("animate"), 1);
  setTimeout(() => likeIconEl.remove(), 900);
}
