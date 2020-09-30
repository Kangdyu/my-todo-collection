import React from "react";
import "./TodoFilter.css";

function TodoFilter() {
  return (
    <div className="todo-filter-container">
      <div id="filter-all" className="todo-filter" data-filter="all">
        All
      </div>
      <div id="filter-ongoing" className="todo-filter" data-filter="ongoing">
        Ongoing
      </div>
      <div id="filter-finished" className="todo-filter" data-filter="finished">
        Finished
      </div>
    </div>
  );
}

export default TodoFilter;
