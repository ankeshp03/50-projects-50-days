var searchIconEl = document.querySelector(".search-icon");
var searchBoxContainerEl = document.querySelector(".search-box-container");
searchIconEl.addEventListener("click", toggleSearchHide);

function toggleSearchHide() {
  searchBoxContainerEl.classList.toggle("hidden");
}