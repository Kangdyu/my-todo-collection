import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "../../common/localStorageController";
import { TODO_LOCAL_STORAGE_KEY } from "../../common/constants";

export type TodoStatus = "ongoing" | "finished";
export type TodoFilter = TodoStatus | "all";

export type Todo = {
  id: number;
  text: string;
  status: TodoStatus;
}

export type TodoState = {
  data: Array<Todo>;
  filter: TodoFilter;
}

const initialState: TodoState = getDataFromLocalStorage(TODO_LOCAL_STORAGE_KEY, {
  data: [],
  filter: "all",
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.data.push(action.payload);
      },
      prepare(text: string, status: TodoStatus) {
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
      reducer(state, action: PayloadAction<number>) {
        const targetId = action.payload;
        state.data = state.data.filter((todo) => todo.id !== targetId);
      },
      prepare(targetId: number) {
        return {
          payload: targetId
        };
      },
    },
    changeTodoStatus: {
      reducer(state, action: PayloadAction<{targetId: number; status: TodoStatus}>) {
        const { targetId, status } = action.payload;
        const target = state.data.find((todo) => todo.id === targetId);
        if (target) {
          target.status = status;
        }
      },
      prepare(targetId: number, status: TodoStatus) {
        return {
          payload: {
            targetId,
            status,
          },
        };
      },
    },
    changeFilter: {
      reducer(state, action: PayloadAction<TodoFilter>) {
        const filter = action.payload;
        state.filter = filter;
      },
      prepare(filter: TodoFilter) {
        return {
          payload: filter
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
