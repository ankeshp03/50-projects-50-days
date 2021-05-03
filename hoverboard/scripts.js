var rows = 25,
  cols = 20;
var colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

var containerEl = document.querySelector(".container");

window.addEventListener("load", initBoxes);
containerEl.addEventListener("mouseover", handleBoxHover);

function initBoxes() {
  for (var row = 0; row < rows; row++) {
    var rowEl = createRow();
    for (var col = 0; col < cols; col++) {
      var boxEl = createBox();
      rowEl.appendChild(boxEl);
    }
    containerEl.appendChild(rowEl);
  }
}

function createBox() {
  var box = document.createElement("div");
  box.classList.add("box");
  return box;
}

function createRow() {
  var row = document.createElement("div");
  row.classList.add("row");
  return row;
}

function handleBoxHover(event) {
  if (event.target.classList.contains("box")) {
    var color = getRandomColor();
    event.target.style.setProperty("--hover-color", color);
  }
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
