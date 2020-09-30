import React from "react";
import Button from "../ui/Button";

function TodoItem({ todo, dispatch }) {
  const onFinishBtnClick = (event) => {
    const targetId = event.currentTarget.parentNode.parentNode.id;
    dispatch({
      type: "changeTodoStatus",
      payload: { targetId, status: "finished" },
    });
  };

  const onOngoingBtnClick = (event) => {
    const targetId = event.currentTarget.parentNode.parentNode.id;
    dispatch({
      type: "changeTodoStatus",
      payload: { targetId, status: "ongoing" },
    });
  };

  const onDeleteBtnClick = (event) => {
    const targetId = event.currentTarget.parentNode.parentNode.id;
    dispatch({
      type: "deleteTodo",
      payload: { targetId },
    });
  };

  return (
    <li
      key={todo.id}
      id={todo.id}
      className={"todo-item" + (todo.status === "finished" ? " finished" : "")}
    >
      <span className="todo-text">{todo.text}</span>
      <div className="todo-btns">
        {todo.status === "ongoing" ? (
          <Button
            className="todo-status-btn todo-finish-btn"
            onClick={onFinishBtnClick}
          >
            v
          </Button>
        ) : (
          <Button
            className="todo-status-btn todo-ongoing-btn"
            onClick={onOngoingBtnClick}
          >
            r
          </Button>
        )}
        <Button className="todo-delete-btn" onClick={onDeleteBtnClick}>
          x
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
