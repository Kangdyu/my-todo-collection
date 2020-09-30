import React from "react";
import Button from "../ui/Button";
import "./TodoList.css";

function TodoList({ todos, dispatch, filter }) {
  const todoItem = todos.map((todo) => (
    <li
      key={todo.id}
      id={todo.id}
      className={"todo-item" + (todo.status === "finished" ? " finished" : "")}
    >
      <span className="todo-text">{todo.text}</span>
      <div className="todo-btns">
        {todo.status === "ongoing" ? (
          <Button className="todo-status-btn todo-finish-btn">v</Button>
        ) : (
          <Button className="todo-status-btn todo-ongoing-btn">r</Button>
        )}
        <Button className="todo-delete-btn">x</Button>
      </div>
    </li>
  ));

  return <ul className="todo-list">{todoItem}</ul>;
}

export default TodoList;
