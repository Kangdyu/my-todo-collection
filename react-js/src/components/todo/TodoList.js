import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, dispatch, filter }) {
  const todoItems = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
  ));

  return <ul className="todo-list">{todoItems}</ul>;
}

export default TodoList;
