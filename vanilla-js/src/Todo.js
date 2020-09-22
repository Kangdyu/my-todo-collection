/*
 * Render result:
 *   <li id={Date.now()} class="todo-item">
 *     <span class="todo-text">{Text}</span>
 *     <div class="todo-btns">
 *       <button class="btn todo-complete-btn">v</button>
 *       <button class="btn todo-delete-btn">x</button>
 *     </div>
 *   </li>
 */
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
    const id = parseInt(event.currentTarget.parentNode.parentNode.id);
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
    const todoText = document.createElement("span");
    const btnDiv = document.createElement("div");

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
    btnDiv.classList.add("todo-btns");
    btnDiv.appendChild(completeBtn);
    btnDiv.appendChild(deleteBtn);

    todoText.classList.add("todo-text");
    todoText.innerText = todo.text;

    todoItem.id = todo.id;
    todoItem.classList.add("todo-item");
    todoItem.appendChild(todoText);
    todoItem.appendChild(btnDiv);

    return todoItem;
  }

  render() {
    this.listElem.innerHTML = "";
    this.getData().forEach((todo) => {
      this.listElem.appendChild(this.createTodoElem(todo));
    });
  }
}
