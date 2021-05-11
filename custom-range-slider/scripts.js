var rangeEl = document.querySelector("#range");
var labelEl = document.querySelector("#range + label");
var thumbRadius = 12.5;

rangeEl.addEventListener("input", setLabel);

function setLabel() {
  var value = parseInt(rangeEl.value, 10);
  var delta = thumbRadius * 2 * (value / 100) - thumbRadius;
  labelEl.style.setProperty("left", `calc(${value}% - ${delta}px)`);
  labelEl.innerText = value;
}
