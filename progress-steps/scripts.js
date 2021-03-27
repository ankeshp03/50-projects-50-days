var buttonContainerEl = document.getElementById("button-container");
var progressContainerEl = document.getElementById("progress-container");
var currentNodeIndex = 0, nodeCount = 4;
buttonContainerEl.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  var prevNodeIndex = currentNodeIndex;
  if(event.target.id === "previous") {
    currentNodeIndex -= 1;
    progressContainerEl.children[prevNodeIndex].classList.remove("active");
  }
  else if(event.target.id === "next") {
    currentNodeIndex += 1;
  }
  else {
    return;
  }
  if(currentNodeIndex === 0) {
    buttonContainerEl.firstElementChild.setAttribute("disabled", true);
  }
  else if(currentNodeIndex === nodeCount - 1) {
    buttonContainerEl.lastElementChild.setAttribute("disabled", true);
  }
  else {
    buttonContainerEl.firstElementChild.removeAttribute("disabled");
    buttonContainerEl.lastElementChild.removeAttribute("disabled");
  }
  var progressWidth = (100 / (nodeCount - 1)) * currentNodeIndex;
  progressContainerEl.style.setProperty("--progress-width", progressWidth + "%");
  progressContainerEl.children[currentNodeIndex].classList.add("active");
}