var draggableContentEl = document.querySelector(".draggable-content");
var boxeEls = document.querySelectorAll(".container .box");

draggableContentEl.addEventListener("dragstart", handleDragStart);
draggableContentEl.addEventListener("dragend", handleDragEnd);

for (let i = 0; i < boxeEls.length; i++) {
  boxeEls[i].addEventListener("drop", dropItem);
  boxeEls[i].addEventListener("dragenter", handleDropEnter);
  boxeEls[i].addEventListener("dragleave", handleDropLeave);
  boxeEls[i].addEventListener("dragover", handleDropOver);
}

function handleDragStart() {
  draggableContentEl.classList.add("border");
  setTimeout(() => draggableContentEl.classList.remove("draggable-content"), 0);
}

function handleDragEnd() {
  draggableContentEl.classList.remove("border");
  draggableContentEl.classList.add("draggable-content");
  handleDropLeave();
}

function dropItem(event) {
  if (!event.target.classList.contains("box")) return;
  event.preventDefault();
  event.target.appendChild(draggableContentEl);
}

function handleDropOver(event) {
  event.preventDefault();
}

function handleDropEnter(event) {
  event.preventDefault();
  event.target.closest(".box").classList.add("hover");
}

function handleDropLeave() {
  var prevHoverEl = document.querySelector(".box.hover");
  if (prevHoverEl) prevHoverEl.classList.remove("hover");
}
