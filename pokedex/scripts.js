var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var cardCount = 150;
var typeList = [
  "fire",
  "grass",
  "electric",
  "water",
  "ground",
  "rock",
  "fairy",
  "poison",
  "bug",
  "dragon",
  "psychic",
  "flying",
  "fighting",
  "normal"
];

var idPrefixer = new Array(cardCount.toString().length).fill("0").join("");

var pokemonCardContainerEl = document.querySelector(".pokemon-card-container");

window.addEventListener("load", loadCards);

async function loadCards() {
  for (var i = 1; i <= cardCount; i++) {
    var data = await getPokemon(i);
    var cardEl = createCard(data);
    pokemonCardContainerEl.appendChild(cardEl);
  }
}

async function getPokemon(id) {
  var response = await fetch(`${apiUrl}${id}`);
  var data = await response.json();
  return data;
}

function createCard(data) {
  var type = getType(data.types);
  var card = document.createElement("div");
  card.classList.add("pokemon-card", type);
  card.innerHTML = `
      <div class="image-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${
          data.id
        }.png" alt="${data.name}" />
      </div>
      <div class="details-container">
        <p class="pokemon-id"><span>${formatId(data.id)}</span></p>
        <h3 class="name">${data.name}</h3>
        <p class="type">Type: ${type}</p>
      </div>
  `;

  return card;
}

function formatId(id) {
  return `#${idPrefixer.slice(id.toString().length)}${id}`;
}

function getType(types) {
  var typeNames = types.map((typeObj) => typeObj.type.name);
  return typeList.find((type) => typeNames.includes(type));
}
