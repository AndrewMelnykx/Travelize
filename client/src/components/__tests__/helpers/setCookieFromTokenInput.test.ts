import Cookies from "js-cookie";
import { setTokenInLocalStorage } from "../../../helpers/helpers-funcs";
jest.mock("js-cookie");

describe("setCookieFromTokenInput", () => {
  it("should set the input`s value inside a cookie if the input ID matches", () => {
    const inputId = "tokenInput";
    const inputIdFromArray = "tokenInput";
    const value = "sampleToken";

    setTokenInLocalStorage(inputId, inputIdFromArray, value);

    expect(Cookies.set).toHaveBeenCalledWith("userToken", value, {
      expires: 1,
    });
  });

  it("should not set the cookie if the input ID does not match", () => {
    const inputId = "tokenInput";
    const inputIdFromArray = "wrongInput";
    const value = "sampleToken";

    setTokenInLocalStorage(inputId, inputIdFromArray, value);

    expect(Cookies.set).not.toHaveBeenCalled();
  });
});
