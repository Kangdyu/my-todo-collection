import { TodoState } from "../features/todo/todoSlice";

export function getDataFromLocalStorage(key: string, defaultValue: TodoState): TodoState {
  let localStorageData = localStorage.getItem(key);
  let result: TodoState;

  if (localStorageData) {
    result = JSON.parse(localStorageData);
  } else {
    result = defaultValue;
    setDataToLocalStorage(key, defaultValue);
  }

  return result;
}

export function setDataToLocalStorage(key: string, data: TodoState): void {
  localStorage.setItem(key, JSON.stringify(data));
}
