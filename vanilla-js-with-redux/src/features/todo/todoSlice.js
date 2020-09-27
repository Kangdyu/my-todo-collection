import { createSlice } from "@reduxjs/toolkit";

import { getDataFromLocalStorage } from "../../common/localStorageController";
import { TODO_LOCAL_STORAGE_KEY } from "../../common/constants";

const initialState = getDataFromLocalStorage(TODO_LOCAL_STORAGE_KEY);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text, status) {
        return {
          payload: {
            id: Date.now(),
            text,
            status,
          },
        };
      },
    },
    deleteTodo(state, action) {
      const { targetId } = action.payload;
      return state.filter((todo) => todo.id !== targetId);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
