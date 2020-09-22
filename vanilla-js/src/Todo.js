export default class Todo {
  constructor(formElem, inputElem, listElem, localStorageKey) {
    this.formElem = formElem;
    this.inputElem = inputElem;
    this.listElem = listElem;
    this.localStorageKey = localStorageKey;
  }

  getData() {
    return this.data;
  }

  setData(newData) {
    this.data = newData;
    this.setDataToLocalStorage();
    this.render();
  }

  init() {
    this.setData(this.getDataFromLocalStorage());
    this.formElem.addEventListener("submit", this.handleAddTodo.bind(this));
  }

  getDataFromLocalStorage() {
    let localStorageData = localStorage.getItem(this.localStorageKey);

    if (localStorageData) {
      localStorageData = JSON.parse(localStorageData);
    } else {
      localStorageData = [];
    }

    return localStorageData;
  }

  setDataToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.getData()));
  }

  handleAddTodo(event) {
    event.preventDefault();

    if (this.inputElem.value === "") {
      return;
    }

    const newTodo = { id: Date.now(), text: this.inputElem.value };
    this.setData([...this.getData(), newTodo]);

    this.inputElem.value = "";
  }

  handleCompleteTodo(event) {}

  handleDeleteTodo(event) {
    const id = parseInt(event.target.parentNode.id);

    this.setData(this.getData().filter((todo) => todo.id !== id));
  }

  createTodoBtn(text, classNames, eventHandler) {
    const btn = document.createElement("button");

    btn.classList.add(...classNames);
    btn.innerText = text;
    if (eventHandler && typeof eventHandler === "function") {
      btn.addEventListener("click", eventHandler.bind(this));
    }

    return btn;
  }

  createTodoElem(todo) {
    const todoItem = document.createElement("li");
    const completeBtn = this.createTodoBtn(
      "v",
      ["btn", "todo-complete-btn"],
      this.handleCompleteTodo
    );
    const deleteBtn = this.createTodoBtn(
      "x",
      ["btn", "todo-delete-btn"],
      this.handleDeleteTodo
    );

    todoItem.id = todo.id;
    todoItem.classList.add("todo-item");
    todoItem.innerText = todo.text;
    todoItem.appendChild(completeBtn);
    todoItem.appendChild(deleteBtn);

    return todoItem;
  }

  render() {
    this.listElem.innerHTML = "";
    this.getData().forEach((todo) => {
      this.listElem.appendChild(this.createTodoElem(todo));
    });
  }
}
