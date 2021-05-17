var todoFormEl = document.querySelector(".todo-form");
var todoInputEl = document.querySelector(".todo-input");
var todoContainerEl = document.querySelector(".todo-container");

window.addEventListener("load", displayAllTodos);
todoFormEl.addEventListener("submit", saveTodo);
todoContainerEl.addEventListener("click", toggleTodoComplete);
todoContainerEl.addEventListener("contextmenu", deleteTodo);

function saveTodo(event) {
  event.preventDefault();
  if (todoInputEl.value.length === 1) return;
  var todo = {
    text: todoInputEl.value,
    completed: false
  };
  displayTodos(todo);
  setTodoToStorage(todo);
  todoInputEl.value = "";
}

function getTodosFromStorage() {
  return JSON.parse(localStorage.getItem("todoList") ?? "[]");
}

function setTodoToStorage(todo) {
  var todos = getTodosFromStorage();
  setTodosToStorage([...todos, todo]);
}

function setTodosToStorage(todos) {
  localStorage.setItem("todoList", JSON.stringify(todos));
}

function displayAllTodos() {
  var todos = getTodosFromStorage();
  var todosEls = todos.map(
    ({ text, completed }) =>
      `<li class="item${completed ? " completed" : ""}">${text}
    </li>`
  );
  todoContainerEl.innerHTML = todosEls.join("");
}

function displayTodos({ text, completed }) {
  var todoEl = document.createElement("li");
  todoEl.className = `item${completed ? " completed" : ""}`;
  todoEl.innerText = text;
  todoContainerEl.appendChild(todoEl);
}

function toggleTodoComplete(event) {
  var itemEl = event.target.closest(".item");
  if (itemEl) {
    var todoIndex = Array.from(itemEl.parentNode.children).indexOf(itemEl);
    var todos = getTodosFromStorage();
    todos[todoIndex].completed = !itemEl.classList.contains("completed");
    setTodosToStorage(todos);
    itemEl.classList.toggle("completed");
  }
}

function deleteTodo(event) {
  event.preventDefault();
  var itemEl = event.target.closest(".item");
  if (itemEl) {
    var todoIndex = Array.from(itemEl.parentNode.children).indexOf(itemEl);
    var todos = getTodosFromStorage();
    todos.splice(todoIndex, 1);
    setTodosToStorage(todos);
    itemEl.remove();
  }
}
