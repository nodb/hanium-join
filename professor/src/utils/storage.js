const storage = sessionStorage;

const saveDataToStorage = (name, data) => {
  storage.setItem(name, JSON.stringify(data));
};

const getDataFromStorage = (name) => {
  const response = storage.getItem(name);

  return JSON.parse(response);
};

export { saveDataToStorage, getDataFromStorage };
