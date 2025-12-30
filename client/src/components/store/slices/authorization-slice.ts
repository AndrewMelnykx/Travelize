import { createSlice } from "@reduxjs/toolkit";
import { AuthorizationHandlingTypes } from "@store/types";

const initialState: AuthorizationHandlingTypes = {
  isSignUpVisible: false,
  isLoginVisible: false,
};

const AuthorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    toggleSignUp: (state, action) => {
      state.isSignUpVisible = action.payload;
    },
    toggleLogin: (state, action) => {
      state.isLoginVisible = action.payload;
    },
  },
});

export const { toggleSignUp, toggleLogin } = AuthorizationSlice.actions;

export default AuthorizationSlice;
