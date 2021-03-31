var contentEl = document.querySelectorAll(".content");

window.addEventListener("load", toggleContentDisplay);
document.addEventListener("scroll", toggleContentDisplay);

function toggleContentDisplay() {
  var maxHeightToShowContent = (window.innerHeight / 5) * 4;
  contentEl.forEach((el) => {
    if (el.getBoundingClientRect().top < maxHeightToShowContent) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}
