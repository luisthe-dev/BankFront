export const createSessionItem = (key, value) => {
  return window.sessionStorage.setItem(key, value);
};

export const getSessionItem = (key) => {
  return window.sessionStorage.getItem(key) ?? "";
};

export const removeSessionItem = (key) => {
  return window.sessionStorage.removeItem(key);
};

export const trashSession = () => {
  return window.sessionStorage.clear();
};
