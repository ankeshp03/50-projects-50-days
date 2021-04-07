var glassesContainerEl = document.querySelector(".glasses-container");
var glassEls = glassesContainerEl.querySelectorAll(".glass");
var glassesCount = glassEls.length;
var mainGlassRemainingEl = document.querySelector(".main-glass .remaining");
var mainGlassFilledEl = document.querySelector(".main-glass .filled");
var mainGlassRemainingValueEl = mainGlassRemainingEl.querySelector(
  ".remaining-quantity"
);
var mainGlassFilledValueEl = mainGlassFilledEl.querySelector(
  ".filled-quantity"
);

glassesContainerEl.addEventListener("click", handleGlassSelected);

function handleGlassSelected(event) {
  var el = event.target.closest(".glass");
  var id = parseInt(el.id, 10);
  if (!el || (id === glassesCount && el.classList.contains("filled"))) return;
  var shouldBeFilled =
    !el.classList.contains("filled") ||
    (el.classList.contains("filled") &&
      glassEls[id] &&
      glassEls[id].classList.contains("filled"));
  var selectedGlass = id - (shouldBeFilled ? 0 : 1);
  var filled = (100 / glassesCount) * selectedGlass;
  glassEls.forEach((glass) => {
    if (parseInt(glass.id, 10) <= selectedGlass) {
      glass.classList.add("filled");
    } else {
      glass.classList.remove("filled");
    }
  });
  mainGlassRemainingEl.style.setProperty("height", `${100 - filled}%`);
  mainGlassFilledEl.style.setProperty("height", `${filled}%`);
  mainGlassRemainingValueEl.innerText = `${2 - 0.25 * selectedGlass}L`;
  mainGlassFilledValueEl.innerText = `${filled}%`;
}
