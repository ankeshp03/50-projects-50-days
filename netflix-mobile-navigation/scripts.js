var sidebarEl = document.querySelector(".sidebar");
var openMenuBtnEl = document.querySelector(".open-menu-btn");
var closeMenuBtnEl = document.querySelector(".close-menu-btn");

openMenuBtnEl.addEventListener("click", showSideBar);
closeMenuBtnEl.addEventListener("click", hideSideBar);

function showSideBar() {
  sidebarEl.classList.add("show");
  sidebarEl.classList.remove("hide");
}

function hideSideBar() {
  sidebarEl.classList.add("hide");
  sidebarEl.classList.remove("show");
}
