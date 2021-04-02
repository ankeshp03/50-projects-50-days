var audioElementMap = {};
var containerEl = document.querySelector(".container");
document.querySelectorAll("audio").forEach((audio) => {
  audioElementMap[audio.id] = audio;
});

containerEl.addEventListener("click", handleButtonClick);
function handleButtonClick(event) {
  if (event.target.tagName !== "BUTTON") return;
  for (var audio in audioElementMap) {
    audioElementMap[audio].pause();
    audioElementMap[audio].currentTime = 0;
  }
  audioElementMap[event.target.dataset.audio].play();
}
