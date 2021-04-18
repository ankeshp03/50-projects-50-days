var navbarEl = document.querySelector(".navbar");
window.addEventListener("scroll", animateNavbar);

function animateNavbar() {
  if (window.scrollY >= 100) {
    if (!navbarEl.classList.contains("expanded")) {
      navbarEl.classList.add("expanded");
    }
  } else {
    navbarEl.classList.remove("expanded");
  }
}
