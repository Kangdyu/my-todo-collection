import React from "react";
import styled from "styled-components";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Container = styled.div`
  padding: 30px;
`;

function TodoContainer() {
  return (
    <Container>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </Container>
  );
}

export default TodoContainer;
