import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, dispatch, filter }) {
  let todoItems;
  if (filter === "all") {
    todoItems = todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
    ));
  } else if (filter === "ongoing" || filter === "finished") {
    todoItems = todos
      .filter((todo) => todo.status === filter)
      .map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ));
  } else {
    console.error("YOU HACKED!");
  }

  return <ul className="todo-list">{todoItems}</ul>;
}

export default TodoList;
