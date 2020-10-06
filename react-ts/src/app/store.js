import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { localStorageSetter } from "./middlewares";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: [localStorageSetter],
});
