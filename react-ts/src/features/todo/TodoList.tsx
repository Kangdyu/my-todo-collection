import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../app/store";
import TodoItem from "./TodoItem";
import { Todo, TodoFilter } from "./todoSlice";

const List = styled.ul`
  width: 100%;
`;

function TodoList() {
  const todos = useSelector<RootState>((state) => state.todo.data) as Todo[];
  const filter = useSelector<RootState>((state) => state.todo.filter) as TodoFilter;

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
