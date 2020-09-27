import store from "../../app/store";
import { TODO_LOCAL_STORAGE_KEY } from "../../common/constants";
import { setDataToLocalStorage } from "../../common/localStorageController";
import { addTodo } from "../../features/todo/todoSlice";

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

function handleAddTodo(event) {
  event.preventDefault();
  store.dispatch(addTodo(todoInput.value, "ongoing"));
  todoInput.value = "";
}

function handleFinishTodo() {}
function handleDeleteTodo() {}
function handleOngoingTodo() {}

function createTodoBtn(text, classNames, eventHandler) {
  const btn = document.createElement("button");

  btn.classList.add(...classNames);
  btn.innerText = text;
  if (eventHandler && typeof eventHandler === "function") {
    btn.addEventListener("click", eventHandler.bind(this));
  }

  return btn;
}

function createTodoItem(todo) {
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const btnDiv = document.createElement("div");

  let statusChangeBtn;
  if (todo.status === "ongoing") {
    statusChangeBtn = createTodoBtn(
      "v",
      ["btn", "todo-status-btn", "todo-finish-btn"],
      handleFinishTodo
    );
  } else if (todo.status === "finished") {
    statusChangeBtn = createTodoBtn(
      "r",
      ["btn", "todo-status-btn", "todo-ongoing-btn"],
      handleOngoingTodo
    );
    todoItem.classList.add("finished");
  }
  const deleteBtn = createTodoBtn(
    "x",
    ["btn", "todo-delete-btn"],
    handleDeleteTodo
  );
  btnDiv.classList.add("todo-btns");
  btnDiv.appendChild(statusChangeBtn);
  btnDiv.appendChild(deleteBtn);

  todoText.classList.add("todo-text");
  todoText.innerText = todo.text;

  todoItem.id = todo.id;
  todoItem.classList.add("todo-item");
  todoItem.appendChild(todoText);
  todoItem.appendChild(btnDiv);

  return todoItem;
}

function render() {
  todoList.innerHTML = "";
  store.getState().todo.forEach((todo) => {
    todoList.appendChild(createTodoItem(todo));
  });
}

export function init() {
  todoForm.addEventListener("submit", handleAddTodo);

  render();

  store.subscribe(render);
  store.subscribe(() =>
    setDataToLocalStorage(TODO_LOCAL_STORAGE_KEY, store.getState().todo)
  );

  console.log(store.getState().todo);
}
