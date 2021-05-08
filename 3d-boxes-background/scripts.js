var toggleBtnEl = document.querySelector(".toggle-btn");
var containerEl = document.querySelector(".container");

toggleBtnEl.addEventListener("click", toggleMagic);

function toggleMagic() {
  containerEl.classList.toggle("magic");
}
