var containerEl = document.querySelector(".container");
var cardImageContainerEl = document.querySelector(".card-image-container");
var cardHeadingEl = document.querySelector(".card-details .heading");
var cardDetailsEl = document.querySelector(".card-details .details");
var authorImageContainerEl = document.querySelector(
  ".author .author-image-container"
);
var authorNameEl = document.querySelector(".author-details .author-name");
var postDateEl = document.querySelector(".author-details .post-date");

var cardData = {
  cardImage: {
    path:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
    alt: "Computer on table"
  },
  heading: "Lorem ipsum dolor sit amet",
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
  author: {
    image: {
      path: "https://randomuser.me/api/portraits/men/45.jpg",
      alt: "author image"
    },
    name: "John Doe",
    postDate: "Apr 13, 2021"
  }
};

window.addEventListener("load", prepareCard);

function prepareCard() {
  showCardPlaceholder();
  setTimeout(setCardContent, 3000);
}

function showCardPlaceholder() {
  containerEl.classList.add("loading");
}

function setCardContent() {
  containerEl.classList.remove("loading");

  cardImageContainerEl.innerHTML = `<img  class="card-image" src="${cardData.cardImage.path}" alt="${cardData.cardImage.alt}" />`;
  cardHeadingEl.innerText = cardData.heading;
  cardDetailsEl.innerText = cardData.details;
  authorImageContainerEl.innerHTML = `<img  class="author-image" src="${cardData.author.image.path}" alt="${cardData.author.image.alt}" />`;
  authorNameEl.innerText = cardData.author.name;
  postDateEl.innerText = cardData.author.postDate;
}
