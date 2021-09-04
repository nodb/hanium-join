const storage = sessionStorage;

const saveDataToStorage = (data) => {
  storage.setItem(JSON.stringify(data));
};

const getDataFromStorage = (name = "USER") => {
  const response = storage.getItem(name);

  return JSON.parse(response);
};

export { saveDataToStorage, getDataFromStorage };
