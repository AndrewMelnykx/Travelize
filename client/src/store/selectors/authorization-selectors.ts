import { RootState } from "@store/RootReducer";

const signUpModalSelector = (state: RootState) => state.authorization.isSignUpVisible;

const loginModalSelector = (state: RootState) => state.authorization.isLoginVisible;

export { signUpModalSelector, loginModalSelector };
