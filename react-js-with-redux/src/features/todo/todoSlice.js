import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "../../common/localStorageController";
import { TODO_LOCAL_STORAGE_KEY } from "../../common/constants";

const initialState = getDataFromLocalStorage(TODO_LOCAL_STORAGE_KEY, {
  data: [],
  filter: "all",
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.data.push(action.payload);
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
      return state.data.filter((todo) => todo.id !== targetId);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
