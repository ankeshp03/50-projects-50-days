var jokeContainerEl = document.querySelector(".joke-container");
var buttonEl = document.querySelector(".container button");
var config = {
  headers: {
    Accept: "application/json"
  }
};

window.addEventListener("load", getJoke);

buttonEl.addEventListener("click", getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/", config)
    .then((response) => response.json())
    .then((response) => (jokeContainerEl.innerText = response.joke));
}
