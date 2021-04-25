var formEl = document.querySelector(".controls");
var copyBtnEl = document.querySelector(".copy-btn");
var passwordEl = document.querySelector(".generated-password");

var charMap = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  symbols: "!@#$%^&*(){}[]=<>/,.",
  numbers: "0123456789"
};

formEl.addEventListener("submit", handleControlsFormSubmit);
copyBtnEl.addEventListener("click", copyToClipboard);

function handleControlsFormSubmit(event) {
  event.preventDefault();
  var charSet = "";
  var strength = formEl.elements[0].value;
  for (let i = 1; i < formEl.elements.length; i++) {
    if (formEl.elements[i].checked) {
      charSet += getCharSet(formEl.elements[i].name);
    }
  }
  var password = generatePassword(charSet, strength);
  passwordEl.innerText = password;
}

function getCharSet(type) {
  return charMap[type];
}

function generatePassword(charSet, strength) {
  var password = "";
  while (strength) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
    strength--;
  }
  return password;
}

function copyToClipboard() {
  if (passwordEl.innerText.length === 0) return;

  if (!navigator) {
    navigator.clipboard
      .writeText(passwordEl.innerText)
      .then(() => alert("Password copied to clipboard!"))
      .catch((err) => alert("Failed to copy Password to clipboard!"));
  } else {
    var textareaEl = document.createElement("textarea");
    textareaEl.innerText = passwordEl.innerText;
    document.body.appendChild(textareaEl);
    textareaEl.select();
    document.execCommand("copy");
    textareaEl.remove(textareaEl);
    alert("Password copied to clipboard!");
  }
}
