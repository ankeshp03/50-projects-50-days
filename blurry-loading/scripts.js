var maxBlurPx = 20,
  progress = 0,
  duration = 3000;
var imageContainerEl = document.querySelector(".image-container");
var progressTextEl = document.querySelector(".progress-text");
window.onload = setProgress();

function setProgress() {
  imageContainerEl.style.setProperty(
    "--blur-value",
    maxBlurPx - (maxBlurPx / 100) * progress + "px"
  );
  progressTextEl.innerHTML = progress + "%";
  progressTextEl.style.setProperty("--opacity", (1 - (progress / 100)));
  if (progress === 100) return;
  setTimeout(setProgress, duration / 100);
  progress += 1;
}
