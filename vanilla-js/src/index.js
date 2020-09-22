const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

let todos = {
  data: [],
  update: (data) => {
    todos.data = data;
  },
};

function render() {
  todoList.innerHTML = "";
  todos.data.forEach((todo) => {
    todoList.appendChild(createTodoItem(todo.id, todo.text));
  });
}

function createTodoBtn(text, classNames, eventHandler) {
  const btn = document.createElement("button");

  btn.classList.add(...classNames);
  btn.innerText = text;
  if (eventHandler && typeof eventHandler === "function") {
    btn.addEventListener("click", eventHandler);
  }

  return btn;
}

function createTodoItem(id, text) {
  const todoItem = document.createElement("li");
  const deleteBtn = createTodoBtn(
    "x",
    ["btn", "todo-delete-btn"],
    handleDeleteTodo
  );

  todoItem.id = id;
  todoItem.classList.add("todo-item");
  todoItem.innerText = text;
  todoItem.appendChild(deleteBtn);

  return todoItem;
}

function handleAddTodo(event) {
  event.preventDefault();

  if (todoInput.value === "") {
    return;
  }

  const newTodo = { id: Date.now(), text: todoInput.value };
  todos.update([...todos.data, newTodo]);
  render();

  todoInput.value = "";
}

function handleDeleteTodo(event) {
  const {
    target: {
      parentNode: { id },
    },
  } = event;

  todos.update(todos.data.filter((todo) => todo.id !== parseInt(id)));
  render();
}

function init() {
  todoForm.addEventListener("submit", handleAddTodo);
}

init();
