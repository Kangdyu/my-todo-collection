/*
 * Render result:
 *   <li id={Date.now()} class="todo-item">
 *     <span class="todo-text">{Text}</span>
 *     <div class="todo-btns">
 *       <button class="btn todo-status-btn todo-finish-btn">v</button>
 *       <button class="btn todo-delete-btn">x</button>
 *     </div>
 *   </li>
 *
 * todo object:
 *   {
 *     id: number,
 *     text: string,
 *     status: string, "ongoing" or "finished"
 *   };
 */
export default class Todo {
  constructor(filter, localStorageKey) {
    this.filter = filter;
    this.localStorageKey = localStorageKey;
  }

  init() {
    this.formElem = document.querySelector(".todo-form");
    this.inputElem = document.querySelector(".todo-input");
    this.listElem = document.querySelector(".todo-list");
    this.setData(this.getDataFromLocalStorage());
    this.formElem.addEventListener("submit", this.handleAddTodo.bind(this));
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
    this.setDataToLocalStorage();
    this.render();
  }

  getFilter() {
    return this.filter;
  }

  setFilter(filter) {
    this.filter = filter;
    this.render();
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

    const newTodo = {
      id: Date.now(),
      text: this.inputElem.value,
      status: "ongoing",
    };
    this.setData([...this.getData(), newTodo]);

    this.inputElem.value = "";
  }

  handleFinishTodo(event) {
    let newData = this.getData();
    const id = parseInt(event.currentTarget.parentNode.parentNode.id);
    const targetIndex = newData.findIndex((todo) => todo.id === id);

    newData[targetIndex].status = "finished";

    this.setData(newData);
  }

  handleOngoingTodo(event) {
    let newData = this.getData();
    const id = parseInt(event.currentTarget.parentNode.parentNode.id);
    const targetIndex = newData.findIndex((todo) => todo.id === id);

    newData[targetIndex].status = "ongoing";

    this.setData(newData);
  }

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

    let statusChangeBtn;
    if (todo.status === "ongoing") {
      statusChangeBtn = this.createTodoBtn(
        "v",
        ["btn", "todo-status-btn", "todo-finish-btn"],
        this.handleFinishTodo
      );
    } else if (todo.status === "finished") {
      statusChangeBtn = this.createTodoBtn(
        "r",
        ["btn", "todo-status-btn", "todo-ongoing-btn"],
        this.handleOngoingTodo
      );
      todoItem.classList.add("finished");
    }
    const deleteBtn = this.createTodoBtn(
      "x",
      ["btn", "todo-delete-btn"],
      this.handleDeleteTodo
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

  render() {
    this.listElem.innerHTML = "";

    if (this.filter === "all") {
      this.getData().forEach((todo) => {
        this.listElem.appendChild(this.createTodoElem(todo));
      });
    } else if (this.filter === "ongoing" || this.filter === "finished") {
      this.getData()
        .filter((todo) => todo.status === this.filter)
        .forEach((todo) => {
          this.listElem.appendChild(this.createTodoElem(todo));
        });
    }
  }
}
