import { TODO_LOCAL_STORAGE_KEY } from "../common/constants";
import { setDataToLocalStorage } from "../common/localStorageController";

export const localStorageSetter = (store) => (next) => (action) => {
  next(action);
  setDataToLocalStorage(TODO_LOCAL_STORAGE_KEY, store.getState().todo);
};
