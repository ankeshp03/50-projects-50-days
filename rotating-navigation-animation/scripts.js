var hamburgerMenuEl = document.querySelector(".hamburger-menu");
var closeMenuEl = document.querySelector(".close-menu");

hamburgerMenuEl.addEventListener("click", openMenu);
closeMenuEl.addEventListener("click", closeMenu);

function openMenu(event) {
  document.body.classList.add("nav-open");
}

function closeMenu(event) {
  document.body.classList.remove("nav-open");
}