import store from "../../app/store";
import { changeFilter } from "./filterSlice";

const filterElems = document.querySelectorAll(".todo-filter");

function handleChangeFilter(event) {
  const filter = event.currentTarget.dataset.filter;
  store.dispatch(changeFilter(filter));
}

function render() {
  filterElems.forEach((filterElem) => {
    if (filterElem.dataset.filter === store.getState().filter) {
      filterElem.classList.add("selected");
    } else {
      filterElem.classList.remove("selected");
    }
  });
}

export function init() {
  filterElems.forEach((filterElem) =>
    filterElem.addEventListener("click", handleChangeFilter)
  );

  render();

  store.subscribe(render);
}
