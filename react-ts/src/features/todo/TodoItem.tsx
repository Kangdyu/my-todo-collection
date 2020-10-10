import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeTodoStatus, deleteTodo, Todo, TodoStatus } from "./todoSlice";
import Button from "../../common/Button";

const Item = styled.li<{status: TodoStatus}>`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;

  padding: 10px 20px;
  margin-bottom: 15px;

  background-color: ${({ theme, status }) =>
    status === "ongoing" ? theme.palette.mainStrong : theme.palette.highlight};

  span {
    align-self: center;
    overflow: hidden;
    padding: 10px 0;
    white-space: nowrap;
    text-overflow: ellipsis;

    text-decoration: ${({ status }) =>
      status === "finished" ? "line-through;" : "none;"};
  }

  div {
    justify-self: end;
    align-self: center;
    display: flex;
  }

  Button:not(:last-child) {
    margin-right: 10px;
  }
`;

type TodoItemProps = {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  const onFinishBtnClick = () => {
    dispatch(changeTodoStatus(todo.id, "finished"));
  };

  const onOngoingBtnClick = () => {
    dispatch(changeTodoStatus(todo.id, "ongoing"));
  };

  const onDeleteBtnClick = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <Item status={todo.status}>
      <span>{todo.text}</span>
      <div>
        {todo.status === "ongoing" && (
          <Button bgColor="highlight" onClick={onFinishBtnClick}>
            v
          </Button>
        )}
        {todo.status === "finished" && (
          <Button bgColor="mainStrong" onClick={onOngoingBtnClick}>
            r
          </Button>
        )}
        <Button bgColor="#e74c3c" onClick={onDeleteBtnClick}>
          x
        </Button>
      </div>
    </Item>
  );
}

export default TodoItem;
