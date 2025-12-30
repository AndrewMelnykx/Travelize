import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

const setTokenInLocalStorage = (inputId: string, inputIdFromArray: string, value: string) => {
  if (inputId === inputIdFromArray && value) {
    localStorage.setItem("userToken", value);
  }
};

const debounce = <T extends (...args: any[]) => void>(fn: T, time: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), time);
  };
};

const debounceDispatch = (dispatch: Dispatch<AnyAction>, time: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (action: AnyAction) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch(action);
    }, time);
  };
};

export { setTokenInLocalStorage, debounce, debounceDispatch };
