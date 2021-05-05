var strength = 10;

var passwordEl = document.querySelector("#password");
var imageContainerEl = document.querySelector(".strength-image-container");

passwordEl.addEventListener("input", setPasswordStrength);

function setPasswordStrength(event) {
  var passwordLength = event.target.value.length;
  var passwordStrength =
    strength - (passwordLength < strength ? passwordLength : strength);
  imageContainerEl.style.setProperty(
    "--blur-value",
    `${passwordStrength * 2}px`
  );
}
