import Cookies from "js-cookie";
import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";

const setCookieFromTokenInput = (inputId: string, inputIdFromArray: string, value: string) => {
  if (inputId === inputIdFromArray && value) {
    Cookies.set("userToken", value, { expires: 1 });
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

export { setCookieFromTokenInput, debounce, debounceDispatch };
