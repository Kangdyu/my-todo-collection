import React from "react";
import "./TodoForm.css";
import Button from "../ui/Button";

function TodoForm() {
  return (
    <form className="todo-form">
      <div className="todo-input-container">
        <input
          className="todo-input"
          type="text"
          placeholder="enter new todo"
        />
        <Button className="todo-submit">+</Button>
      </div>
    </form>
  );
}

export default TodoForm;
