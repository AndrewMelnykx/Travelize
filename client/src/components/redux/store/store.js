import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "@redux/reducers/RootReducer";
const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = () => store.dispatch;
export { UseStoreDispatcher };
export default store;
