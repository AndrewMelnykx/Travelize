import { combineReducers } from "@reduxjs/toolkit";
import AuthorizationSlice from "@slices/authorization-slice";
import {
  AuthorizationHandlingTypes,
  DataHandlingTypes,
  FilterHandlingType,
} from "@redux/types";
import DataSlice from "@redux/slices/data-slice";
import FilterSlice from "@redux/slices/filter-slice";

export interface RootState {
  authorization: AuthorizationHandlingTypes;
  data: DataHandlingTypes;
  filter: FilterHandlingType;
}

const RootReducer = combineReducers({
  authorization: AuthorizationSlice.reducer,
  data: DataSlice.reducer,
  filter: FilterSlice.reducer,
});

export default RootReducer;
