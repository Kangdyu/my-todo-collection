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
    removeTodo(state, action) {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
