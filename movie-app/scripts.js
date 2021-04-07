var movieApi =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=261e39a65b04675b3cea32ee2e37f9be&page=1";
var searchApi =
  "https://api.themoviedb.org/3/search/movie?api_key=261e39a65b04675b3cea32ee2e37f9be&query='";
var imageApi = "https://image.tmdb.org/t/p/w1280";

var moviesContainerEl = document.querySelector(".movies-container");
var searchFormEl = document.getElementById("search-form");
window.addEventListener("load", getMovies);
searchFormEl.addEventListener("submit", handleSearchFormSubmit);

async function fetchData(url) {
  var response = await fetch(url);
  var data = await response.json();
  return data.results;
}

async function getMovies() {
  var movies = await fetchData(movieApi);
  moviesContainerEl.innerHTML = createCardElement(movies);
}

async function handleSearchFormSubmit(event) {
  event.preventDefault();
  var text = searchFormEl.elements["search-text"].value;
  if (text.length > 0) {
    var movies = await fetchData(`${searchApi}${text}'`);
    moviesContainerEl.innerHTML = createCardElement(movies);
  } else {
    window.location.reload();
  }
}

function getRatingStatus(rating) {
  return rating >= 8 ? "excellent" : rating >= 5 ? "good" : "bad";
}

function createCardElement(cards) {
  return cards
    .map(
      (card) => `
    <div class="movie-card">
      <img src="${imageApi}${card.poster_path}" alt="${card.title} poster" />
      <h3 class="movie-details">
        <span class="movie-name">${card.title}</span>
        <span class="rating ${getRatingStatus(card.vote_average)}">${
        card.vote_average
      }</span>
      </h3>
      <div class="overview">
        <h3>Overview</h3>
        <p>${card.overview}</p>          
        </div>
    </div>
    `
    )
    .join("");
}
