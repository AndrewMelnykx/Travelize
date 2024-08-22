import { adultsSelectOptionsData } from "@data/static-data/inputs-data";
import { FilterHandlingType } from "@redux/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FilterHandlingType = {
  adultsOptionsSelect: adultsSelectOptionsData,
  departureCityInitial: "",
  arrivalCityInitial: "",
  isCloseIconVisible: false,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleSelectAdultState: (state, action) => {
      state.adultsOptionsSelect = action.payload;
    },
    handleDepartureCityValue: (state, action) => {
      state.departureCityInitial = action.payload;
    },
    handleArrivalCityValue: (state, action) => {
      state.arrivalCityInitial = action.payload;
    },
    handleCloseIconVisibility: (state, action) => {
      state.isCloseIconVisible = action.payload;
    },
  },
});

export const FilterActions = FilterSlice.actions;
export default FilterSlice;
