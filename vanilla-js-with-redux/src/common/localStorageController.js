export function getDataFromLocalStorage(key) {
  let localStorageData = localStorage.getItem(key);

  if (localStorageData) {
    localStorageData = JSON.parse(localStorageData);
  } else {
    localStorageData = [];
  }

  return localStorageData;
}

export function setDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
