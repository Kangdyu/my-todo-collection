export function getDataFromLocalStorage(key, defaultValue) {
  let localStorageData = localStorage.getItem(key);

  if (localStorageData) {
    localStorageData = JSON.parse(localStorageData);
  } else {
    localStorageData = defaultValue;
    setDataToLocalStorage(key, defaultValue);
  }

  return localStorageData;
}

export function setDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
