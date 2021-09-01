const storage = sessionStorage;
const saveDataToStorage = (data) => {
    storage.setItem("USER", JSON.stringify(data));
}

const getDtatFromStorage = (name = "USER") => {
    storage.getItem(name)

    return 
}