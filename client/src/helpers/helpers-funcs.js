import Cookies from "js-cookie";
const setCookieFromTokenInput = (inputId, inputIdFromArray, value) => {
    if (inputId === inputIdFromArray) {
        Cookies.set("userToken", value, { expires: 1 });
    }
};
export { setCookieFromTokenInput };
