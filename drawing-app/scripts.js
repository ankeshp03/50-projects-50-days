var controlsEl = document.querySelector(".controls");
var sizeDisplayEl = document.querySelector(".size");
var colorInputEl = document.querySelector("#color");

controlsEl.addEventListener("click", handleControls);
colorInputEl.addEventListener("change", changeColor);

var canvasEl = document.querySelector("#canvas");
var ctx = canvasEl.getContext("2d");

var x, y;
var size = 10,
  minSize = 5,
  maxSize = 50;
var fillColor = "black";
var isMousePressed = false;

canvas.addEventListener("mousedown", setCoordinates);
canvas.addEventListener("mousemove", initDrawing);
canvas.addEventListener("mouseup", endDrawing);

function setCoordinates(event) {
  isMousePressed = true;

  x = event.layerX;
  y = event.layerY;

  initDrawing(event);
}

function initDrawing(event) {
  if (isMousePressed) {
    var x2 = event.layerX;
    var y2 = event.layerY;

    startDrawing(x, y, x2, y2);

    x = x2;
    y = y2;
  }
}

function startDrawing(x, y, x2, y2) {
  drawCircle(x, y);
  drawLine(x, y, x2, y2);
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.fillStyle = fillColor;
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}

function drawLine(x, y, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size * 2;
  ctx.strokeStyle = fillColor;
  ctx.stroke();
}

function endDrawing(event) {
  initDrawing(event);

  x = undefined;
  y = undefined;

  isMousePressed = false;
}

function handleControls(event) {
  switch (event.target.id) {
    case "decrease-size":
      changeSize(size > minSize ? size - 5 : size);
      break;
    case "increase-size":
      changeSize(size < maxSize ? size + 5 : size);
      break;
    case "clear":
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      break;
    default:
      return;
  }
}

function changeSize(newSize) {
  size = newSize;
  sizeDisplayEl.innerText = size;
}

function changeColor(event) {
  fillColor = event.target.value;
}
