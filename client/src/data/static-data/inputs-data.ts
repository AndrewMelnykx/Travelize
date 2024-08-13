import { CustomInputProps } from "@modals/types";
import { ChangeEvent } from "react";

const signUpInputs: CustomInputProps[] = [
  {
    id: "0",
    label: "Email Address",
    type: "email",
    name: "email",
    value: "",
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      e;
    },
  },
];

const loginInputs: CustomInputProps[] = [
  {
    id: "0",
    label: "Token",
    type: "string",
    name: "tokenAutocomplete",
    value: "",
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      e;
    },
  },
  {
    id: "1",
    label: "Password",
    type: "password",
    name: "Password",
    value: "",
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      e;
    },
  },
];

const adultsSelectOptionsData = [
  { id: "1", label: "One", value: "1" },
  { id: "2", label: "Two", value: "2" },
];
const tokenInputId = "0";

export { signUpInputs, loginInputs, tokenInputId, adultsSelectOptionsData };
