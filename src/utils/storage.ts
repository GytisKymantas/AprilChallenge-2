import { isWindowExists } from "./constants";

export const getFromLocalStorage = (key: string): string | null => {
  try {
    if (isWindowExists) {
      return window.localStorage.getItem(key);
    }

    return null;
  } catch (e) {
    console.error(`Can't get variable from LocalStorage`);

    return null;
  }
};

export const setToLocalStorage = (key: string, value: string): void => {
  try {
    if (isWindowExists) {
      window.localStorage.setItem(key, value);
    }
  } catch (e) {
    console.error(`Can't set variable to LocalStorage`);
  }
};

export const removeFromLocalStorage = (key: string): void => {
  try {
    if (isWindowExists) {
      window.localStorage.removeItem(key);
    }
  } catch (e) {
    console.error(`Can't remove variable from LocalStorage`);
  }
};
