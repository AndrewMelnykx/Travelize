import { combineReducers } from "@reduxjs/toolkit";
import AuthorizationSlice from "@slices/authorization-slice";
import DataSlice from "@redux/slices/data-slice";
import FilterSlice from "@redux/slices/filter-slice";
const RootReducer = combineReducers({
    authorization: AuthorizationSlice.reducer,
    data: DataSlice.reducer,
    filter: FilterSlice.reducer,
});
export default RootReducer;
