import React, { useRef } from "react";
import "./TodoForm.css";
import Button from "../ui/Button";

function TodoForm({ dispatch }) {
  const todoText = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    if (todoText.current.value === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: todoText.current.value,
      status: "ongoing",
    };
    dispatch({ type: "addTodo", payload: newTodo });

    todoText.current.value = "";
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <div className="todo-input-container">
        <input
          ref={todoText}
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
