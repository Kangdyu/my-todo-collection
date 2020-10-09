import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import todoReducer from "../features/todo/todoSlice";
import { localStorageSetter } from "./middlewares";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: [localStorageSetter] as const,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();