var api = "https://randomuser.me/api?results=50";
var searchBoxEl = document.querySelector("#search-box");
var userContainerEl = document.querySelector(".user-container");
var data = [];

window.addEventListener("load", loadCards);
searchBoxEl.addEventListener("input", filterUsers);

async function loadCards() {
  userContainerEl.innerHTML = `<h4 class="loader">Loading...</h4>`;
  data = await getData();
  getCards(data);
}

async function getData() {
  var resp = await fetch(api);
  var data = await resp.json();
  return data.results;
}

function getCards(currentData) {
  var cardsEl = currentData.map(
    (user) => `
  <div class="user">
  <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" />
      <div class="details-container">
        <h4 class="name">${user.name.first} ${user.name.last}</h4>
        <p class="location">${user.location.city}, ${user.location.country}</p>
      </div>
      </div>
  `
  );
  userContainerEl.innerHTML =
    cardsEl.length > 0 ? cardsEl.join("") : `<h4 class="noData">No Data</h4>`;
}

function filterUsers(event) {
  var searchText = event.target.value || "";
  var filteredData = data.filter((user) => {
    return `${user.name.first} ${user.name.last}${user.location.city}, ${user.location.country}`
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  getCards(filteredData);
}
