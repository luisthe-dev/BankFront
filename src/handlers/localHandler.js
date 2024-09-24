export const createLocalItem = (key, value) => {
  return window.localStorage.setItem(key, value);
};

export const getLocalItem = (key) => {
  return window.localStorage.getItem(key) ?? "";
};

export const removeLocalItem = (key) => {
  return window.localStorage.removeItem(key);
};

export const trashLocal = () => {
  return window.localStorage.clear();
};
