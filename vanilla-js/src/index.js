import Todo from "./Todo.js";

const filterContainerElem = document.querySelector(".todo-filter-container");
const filterElems = {
  all: document.getElementById("filter-all"),
  ongoing: document.getElementById("filter-ongoing"),
  finished: document.getElementById("filter-finished"),
};

function handleFiltering(event) {
  if (event.target.classList.contains("todo-filter")) {
    const filter = event.target.dataset.filter;
    const prevFilter = todo.getFilter();
    todo.setFilter(filter);
    renderFilterBtn(prevFilter);
  }
}

function renderFilterBtn(prevFilter) {
  if (prevFilter) {
    filterElems[prevFilter].classList.remove("selected");
  }
  filterElems[todo.getFilter()].classList.add("selected");
}

const LOCAL_STORAGE_KEY = "todo";

const todo = new Todo("all", LOCAL_STORAGE_KEY);
todo.init();

filterContainerElem.addEventListener("click", handleFiltering);
renderFilterBtn(null);
