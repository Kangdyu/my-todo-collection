import React from "react";
import "./TodoFilter.css";

function TodoFilter({ filter, setFilter }) {
  const onFilterBtnClick = (event) => {
    const targetFilter = event.target.dataset.filter;
    if (filter !== targetFilter) {
      setFilter(targetFilter);
    }
  };

  return (
    <div className="todo-filter-container">
      <button
        className={`todo-filter${filter === "all" ? " selected" : ""}`}
        data-filter="all"
        onClick={onFilterBtnClick}
      >
        all
      </button>
      <button
        className={`todo-filter${filter === "ongoing" ? " selected" : ""}`}
        data-filter="ongoing"
        onClick={onFilterBtnClick}
      >
        Ongoing
      </button>
      <button
        className={`todo-filter${filter === "finished" ? " selected" : ""}`}
        data-filter="finished"
        onClick={onFilterBtnClick}
      >
        Finished
      </button>
    </div>
  );
}

export default TodoFilter;
