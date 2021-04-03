var eventDetailsContainerEl = document.querySelector(
    ".event-details-container"
  ),
  defaultMsgContainerEl = document.querySelector(".default-msg-container"),
  keyContainerEl = document.querySelector(".key-container"),
  keyCodeContainerEl = document.querySelector(".keyCode-container"),
  codeContainerEl = document.querySelector(".code-container");

window.addEventListener("keydown", displayKeyDetails);

function displayKeyDetails(event) {
  eventDetailsContainerEl.classList.remove("hidden");
  defaultMsgContainerEl.classList.add("hidden");
  keyContainerEl.innerText = event.key;
  keyCodeContainerEl.innerText = event.keyCode;
  codeContainerEl.innerText = event.code;
}
