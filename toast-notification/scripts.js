var msgs = ["One", "Two", "Three", "Four"];
var colors = ["red", "green", "rebeccapurple"];
var notificationBtnEl = document.querySelector(".notification-btn");

var toastContainerEl = document.querySelector(".toast-container");

notificationBtnEl.addEventListener("click", createToast);

function createToast() {
  var message = getMessage(),
    color = getColor();
  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.style.setProperty("color", color);
  toast.innerText = message;
  toastContainerEl.appendChild(toast);
  setTimeout(() => removeToast(toast), 4000);
}

function getMessage() {
  return `Message ${getRandom(msgs)}`;
}

function getColor() {
  return getRandom(colors);
}

function getRandom(list) {
  return list[parseInt(Math.random() * list.length, 10)];
}

function removeToast(toast) {
  toast.remove();
}