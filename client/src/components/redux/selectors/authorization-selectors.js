const signUpModalSelector = (state) => state.authorization.isSignUpVisible;
const loginModalSelector = (state) => state.authorization.isLoginVisible;
export { signUpModalSelector, loginModalSelector };
