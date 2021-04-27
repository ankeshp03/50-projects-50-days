var notes = [];

function toggleAddBtnDisable() {
  let noteTitle = document.getElementById("newNoteTitle").value;
  let noteText = document.getElementById("newNoteText").value;
  if (noteTitle.length > 0 || noteText.length > 0) {
    document.getElementById("saveNote").removeAttribute("disabled");
  } else {
    document.getElementById("saveNote").setAttribute("disabled", true);
  }
}

function addNote() {
  document.getElementById(
    "addIcon"
  ).style.cssText = `opacity: 0; visibility: hidden;`;
  document.getElementById(
    "newNoteTitle"
  ).style.cssText = `visibility: visible; opacity: 1`;
  document.getElementById(
    "newColorSelector"
  ).style.cssText = `visibility: visible; opacity: 1`;
  document.getElementById(
    "newNoteText"
  ).style.cssText = `visibility: visible; opacity: 1`;
  document.getElementById(
    "saveNote"
  ).style.cssText = `visibility: visible; opacity: 1`;
  document.getElementById(
    "cancelNewNoteSave"
  ).style.cssText = `visibility: visible; opacity: 1`;
}

function saveNote() {
  document.getElementById(
    "addIcon"
  ).style.cssText = `opacity: 0; visibility: hidden;`;
  let title = document.getElementById("newNoteTitle").value;
  let text = document.getElementById("newNoteText").value;
  let bgColor = document.getElementById("newColorSelector").value;

  let listIndex =
    notes[notes.length - 1] && notes[notes.length - 1].id
      ? notes[notes.length - 1].id + 1
      : 1;
  notes.push({ id: listIndex, title, text, bgColor });

  let listElement = document.createElement("li");
  listElement.setAttribute("id", `noteContainer_${listIndex}`);
  listElement.setAttribute("class", `noteContainer color_${bgColor}`);

  listElement.innerHTML = `
        <div class="header">
            <input
                id="noteTitle_${listIndex}"
                type="text"
                class="noteTitle noBorder defaultCursor"
                style="background: #ffffff25"
                title="${title}"
                value="${title}"
                readonly
            />
            <span class="iconContainer">
                <i 
                id="editIcon_${listIndex}" 
                class="fas fa-pencil-alt icon" 
                title="Edit Note"
                onclick="editNote(${listIndex})"></i>
                <i 
                id="deleteIcon_${listIndex}" 
                class="fas fa-trash-alt icon" 
                title="Delete Note"
                onclick="deleteNote(${listIndex})"></i>
                <select id="colorSelector_${listIndex}" class="colorSelector" title="Select Color">
                    <option value="C4F0E8" class="color color_C4F0E8"></option>
                    <option value="FFC1B1" class="color color_FFC1B1"></option>
                    <option value="F2EBD7" class="color color_F2EBD7"></option>
                    <option value="AFE9B2" class="color color_AFE9B2"></option>
                    <option value="EDBD8C" class="color color_EDBD8C"></option>
                </select>
            </span>
        </div>
        <textarea
            id="noteText_${listIndex}"
            class="noteText noBorder defaultCursor"
            style="background: #ffffff50"
            readonly
        >${text}</textarea>
        <button id="saveEditedNote_${listIndex}" class="btn saveBtn" onclick="saveEditedNote(${listIndex})">Save</button>
        <button id="cancelEdited_${listIndex}" class="btn cancelBtn" onclick="cancelEditedNoteSave(${listIndex})">Cancel</button>
    `;
  document.getElementById("notesContainer").appendChild(listElement);
  document.getElementById(`colorSelector_${listIndex}`).value = bgColor;
  resetAddNote();
}

function resetAddNote() {
  document.getElementById(
    "addIcon"
  ).style.cssText = `visibility: visible; opacity: 1`;
  document.getElementById(
    "newNoteTitle"
  ).style.cssText = `opacity: 0; visibility: hidden;`;
  document.getElementById(
    "newColorSelector"
  ).style.cssText = `opacity: 0; visibility: hidden;`;
  document.getElementById(
    "newNoteText"
  ).style.cssText = `opacity: 0; visibility: hidden;`;
  document.getElementById(
    "saveNote"
  ).style.cssText = `opacity: 0; visibility: hidden;`;
  document.getElementById(
    "cancelNewNoteSave"
  ).style.cssText = `opacity: 0; visibility: hidden;`;

  document.getElementById("newNoteTitle").value = "";
  document.getElementById("newNoteText").value = "";
  document.getElementById("newColorSelector").value = "C4F0E8";
}

function cancelNewNoteSave() {
  resetAddNote();
}

function editNote(index) {
  let titleElement = document.getElementById(`noteTitle_${index}`);
  let textElement = document.getElementById(`noteText_${index}`);
  let colorSelectorElement = document.getElementById(`colorSelector_${index}`);
  let editIconElement = document.getElementById(`editIcon_${index}`);
  let deleteIconElement = document.getElementById(`deleteIcon_${index}`);

  editIconElement.style.cssText = `opacity: 0; visibility: hidden;`;
  deleteIconElement.style.cssText = `opacity: 0; visibility: hidden;`;
  colorSelectorElement.style.cssText = `visibility: visible; opacity: 1;`;

  titleElement.removeAttribute("readonly");
  textElement.removeAttribute("readonly");

  titleElement.classList.remove("defaultCursor");
  textElement.classList.remove("defaultCursor");

  document.getElementById(`noteContainer_${index}`).classList.add("editMode");

  titleElement.focus();
}

function deleteNote(index) {
  notes.splice(index - 1, 1);
  let noteContainerElement = document.getElementById(`noteContainer_${index}`);
  noteContainerElement.parentNode.removeChild(noteContainerElement);
}

function saveEditedNote(index) {
  let title = document.getElementById(`noteTitle_${index}`).value;
  let text = document.getElementById(`noteText_${index}`).value;
  let bgColor = document.getElementById(`colorSelector_${index}`).value;

  document.getElementById(
    `noteContainer_${index}`
  ).className = `noteContainer color_${bgColor}`;
  notes[index - 1].title = title;
  notes[index - 1].text = text;
  notes[index - 1].bgColor = bgColor;

  resetEditedNote(index);
}

function cancelEditedNoteSave(index) {
  document.getElementById(`noteTitle_${index}`).value = notes[index - 1].title;
  document.getElementById(`noteText_${index}`).value = notes[index - 1].text;
  document.getElementById(`colorSelector_${index}`).value =
    notes[index - 1].bgColor;
  resetEditedNote(index);
}

function resetEditedNote(index) {
  let titleElement = document.getElementById(`noteTitle_${index}`);
  let textElement = document.getElementById(`noteText_${index}`);
  let colorSelectorElement = document.getElementById(`colorSelector_${index}`);
  let editIconElement = document.getElementById(`editIcon_${index}`);
  let deleteIconElement = document.getElementById(`deleteIcon_${index}`);

  editIconElement.style.cssText = `visibility: visible; opacity: 1;`;
  deleteIconElement.style.cssText = `visibility: visible; opacity: 1;`;
  colorSelectorElement.style.cssText = `opacity: 0; visibility: hidden;`;

  titleElement.setAttribute("readonly", true);
  textElement.setAttribute("readonly", true);

  titleElement.classList.add("defaultCursor");
  textElement.classList.add("defaultCursor");

  document
    .getElementById(`noteContainer_${index}`)
    .classList.remove("editMode");
}
