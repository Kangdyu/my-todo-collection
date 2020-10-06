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
    deleteTodo: {
      reducer(state, action) {
        const { targetId } = action.payload;
        state.data = state.data.filter((todo) => todo.id !== targetId);
      },
      prepare(targetId) {
        return {
          payload: {
            targetId,
          },
        };
      },
    },
    changeTodoStatus: {
      reducer(state, action) {
        const { targetId, status } = action.payload;
        state.data.find((todo) => todo.id === targetId).status = status;
      },
      prepare(targetId, status) {
        return {
          payload: {
            targetId,
            status,
          },
        };
      },
    },
    changeFilter: {
      reducer(state, action) {
        const { filter } = action.payload;
        state.filter = filter;
      },
      prepare(filter) {
        return {
          payload: {
            filter,
          },
        };
      },
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  changeTodoStatus,
  changeFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
