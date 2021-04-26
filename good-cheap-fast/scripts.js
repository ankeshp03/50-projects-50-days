var optionFormEl = document.querySelector("#optionForm");

var toggleMap = {
  good: "fast",
  cheap: "good",
  fast: "cheap"
};

var ids = Object.keys(toggleMap);

optionFormEl.addEventListener("change", changeLog);

function changeLog(event) {
  if (ids.includes(event.target.id)) {
    var allChecked = getAllCheckStatus();
    if (allChecked && event.target.checked) {
      document.querySelector(`#${toggleMap[event.target.id]}`).checked = false;
    }
  }
}

function getAllCheckStatus() {
  for (let i = 0; i < optionFormEl.elements.length; i++) {
    if (!optionFormEl.elements[i].checked) return false;
  }
  return true;
}
