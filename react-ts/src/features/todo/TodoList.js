import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const List = styled.ul`
  width: 100%;
`;

function TodoList() {
  const todos = useSelector((state) => state.todo.data);
  const filter = useSelector((state) => state.todo.filter);

  let todoItems;
  if (filter === "all") {
    todoItems = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  } else if (filter === "ongoing" || filter === "finished") {
    todoItems = todos
      .filter((todo) => todo.status === filter)
      .map((todo) => <TodoItem key={todo.id} todo={todo} />);
  } else {
    console.error("YOU HACKED!");
  }

  return <List>{todoItems}</List>;
}

export default TodoList;
