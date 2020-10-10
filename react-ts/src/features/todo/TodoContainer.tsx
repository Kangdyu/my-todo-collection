import React from "react";
import styled from "styled-components";
import TodoFilterContainer from "./TodoFilterContainer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Container = styled.div`
  padding: 30px;
`;

function TodoContainer() {
  return (
    <Container>
      <TodoForm />
      <TodoFilterContainer />
      <TodoList />
    </Container>
  );
}

export default TodoContainer;
