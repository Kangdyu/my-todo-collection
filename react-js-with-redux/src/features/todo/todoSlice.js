import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text, done) {
        return {
          payload: {
            id: Date.now(),
            text,
            done,
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

export default todoSlice.reducer;
