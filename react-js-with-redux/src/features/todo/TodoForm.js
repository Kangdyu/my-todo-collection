import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../../common/Button";
import { addTodo } from "./todoSlice";

const Form = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 30px;

  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.palette.mainStrong};
    padding: 10px;
    padding-right: 60px;
    color: white;
  }

  button {
    position: absolute;
    right: 20px;
    top: 5px;
  }
`;

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(addTodo(value, "ongoing"));
    setValue("");
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="enter new todo"
        value={value}
        onChange={onChange}
      />
      <Button bgColor="highlight">+</Button>
    </Form>
  );
}

export default TodoForm;
