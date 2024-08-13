import Cookies from "js-cookie";

const setCookieFromTokenInput = (
  inputId: string,
  inputIdFromArray: string,
  value: string
) => {
  if (inputId === inputIdFromArray) {
    Cookies.set("userToken", value, { expires: 1 });
  }
};

export { setCookieFromTokenInput };
