import React, { useState, useReducer, useEffect } from "react";
import { TODO_LOCAL_STORAGE_KEY } from "../../common/constants";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "../../common/localStorageController";
import "./TodoContainer.css";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return [...state, action.payload];
    case "deleteTodo":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error();
  }
}

function TodoContainer() {
  const [todos, dispatch] = useReducer(
    reducer,
    getDataFromLocalStorage(TODO_LOCAL_STORAGE_KEY)
  );
  useEffect(() => {
    setDataToLocalStorage(TODO_LOCAL_STORAGE_KEY, todos);
  }, [todos]);
  const [filter, setFilter] = useState("all");

  return (
    <main className="todo">
      <TodoForm dispatch={dispatch} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} dispatch={dispatch} filter={filter} />
    </main>
  );
}

export default TodoContainer;
