var imgEls = document.querySelectorAll(".image-container img");
var navBtnEls = document.querySelectorAll("nav button");

window.addEventListener("load", initNavBtns);

function initNavBtns() {
  navBtnEls.forEach((btn, idx) =>
    btn.addEventListener("click", () => setActiveNavigation(idx))
  );
}

function setActiveNavigation(idx) {
  removeInactive("img");
  removeInactive("button");
  imgEls[idx].classList.add("active");
  navBtnEls[idx].classList.add("active");
}

function removeInactive(tag) {
  var activeEl = document.querySelector(`${tag}.active`);
  if (activeEl) {
    activeEl.classList.remove("active");
  }
}
