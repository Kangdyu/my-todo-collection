import React from "react";
import "./TodoContainer.css";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoContainer() {
  return (
    <main className="todo">
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </main>
  );
}

export default TodoContainer;
