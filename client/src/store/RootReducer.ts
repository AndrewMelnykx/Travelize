import { combineReducers } from "@reduxjs/toolkit";
import AuthorizationSlice from "@slices/authorization-slice";
import DataSlice from "@store/slices/data-slice";
import FilterSlice from "@store/slices/filter-slice";

import { AuthorizationHandlingTypes, DataHandlingTypes, FilterHandlingType } from "@store/types";

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
