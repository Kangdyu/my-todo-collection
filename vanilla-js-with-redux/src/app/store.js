import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";
import filterReducer from "../features/filter/filterSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
  },
});
