var userProfileUrl = "https://api.github.com/users/";
var userRepoSubUrl = "/repos?sort=created";

var userFormEl = document.querySelector("#user-form");
var usernameEl = document.querySelector(".username");
var detailsWrapperEl = document.querySelector(".details-wrapper");

userFormEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  var username = usernameEl.value;
  if (username.length === 0) return;
  usernameEl.value = "";
  createUserCard(username);
}

async function createUserCard(username) {
  var userDetails = await fetchData(`${userProfileUrl}${username}`);
  var details = "";
  var isUserNotFound =
    userDetails.message && userDetails.message.toLowerCase() === "not found";
  if (isUserNotFound) {
    detailsWrapperEl.innerHTML = `
    <div class="github-details-container">
      <h1>No profile with this username</h1>
    </div>
    `;
    return;
  }

  details = `
  <div class="profile-container">
      <img src="${userDetails.avatar_url}" alt="${userDetails.name}" class="profile" />
    </div>
    <div class="details">
      <h2 class="username">${userDetails.name}</h2>
      <p class="bio">${userDetails.bio}</p>
      <p class="sub-details">
        <span class="followers-container">
          <span class="count">${userDetails.followers}</span>
          <span class="label">Followers</span>
        </span>
        <span class="following-container">
          <span class="count">${userDetails.following}</span>
          <span class="label">Following</span>
        </span>
        <span class="repos-count-container">
          <span class="count">${userDetails.public_repos}</span>
          <span class="label">Repos</span>
        </span>
      </p>
      <div class="repos"></div>
    </div>
    `;

  detailsWrapperEl.innerHTML = `<div class="github-details-container">${details}</div>`;

  var repoDetails = await fetchData(
    `${userProfileUrl}${username}${userRepoSubUrl}`
  );

  var reposEl = detailsWrapperEl.querySelector(".repos");

  var repos = repoDetails
    .slice(0, 5)
    .map(
      (repo) =>
        `<a target="_blank" href="${repo.html_url}" class="repo">${repo.name}</a>`
    )
    .join("");

  reposEl.innerHTML = repos;
}

async function fetchData(url) {
  var response = await fetch(url);
  var data = await response.json();
  return data;
}
