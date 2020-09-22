import Todo from "./Todo.js";

function init() {
  const LOCAL_STORAGE_KEY = "todo";

  const formElem = document.querySelector(".todo-form");
  const inputElem = document.querySelector(".todo-input");
  const listElem = document.querySelector(".todo-list");

  const todo = new Todo(formElem, inputElem, listElem, LOCAL_STORAGE_KEY);
  todo.init();
}

init();
