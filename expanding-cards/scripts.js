var cardContainerEl = document.getElementById("cardContainer");

cardContainerEl.addEventListener("click", setActiveCard);

function setActiveCard(event) {
  if(event.target.id !== "cardContainer") {
    document.querySelector(".card.active").classList.remove("active");
    event.target.classList.add("active");
  }
}