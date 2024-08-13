import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "@redux/reducers/RootReducer";

const store = configureStore({ reducer: RootReducer });

export type StoreDispatcherTypes = typeof store.dispatch;

const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export { UseStoreDispatcher };
export default store;
