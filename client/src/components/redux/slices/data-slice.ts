import { DataHandlingTypes } from "@redux/types";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCitySuggestionsArrivalThunk,
  fetchCitySuggestionsDepartureThunk,
  fetchHotelsDataThunk,
  fetchTicketsDataThunk,
} from "./actions-slice";
import { toast } from "react-toastify";

const initialState: DataHandlingTypes = {
  departureInputData: [],
  arrivalInputData: [],
  hotelsData: [],
  ticketsData: [],
};

const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchedDepartureInputData: (state, action) => {
      state.departureInputData = action.payload;
    },
    fetchedArrivalInputData: (state, action) => {
      state.arrivalInputData = action.payload;
    },
    fetchedDataHotels: (state, action) => {
      state.hotelsData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCitySuggestionsDepartureThunk.fulfilled,
        (state, action) => {
          state.departureInputData = action.payload;
        }
      )
      .addCase(fetchCitySuggestionsArrivalThunk.fulfilled, (state, action) => {
        state.arrivalInputData = action.payload;
      })
      .addCase(fetchHotelsDataThunk.fulfilled, (state, action) => {
        state.hotelsData = action.payload;
      })
      .addCase(fetchHotelsDataThunk.rejected, (state) => {
        state.hotelsData = [];
        toast.error("Failed to fetch hotels");
      })
      .addCase(fetchTicketsDataThunk.fulfilled, (state, action) => {
        state.ticketsData = action.payload;
      });
  },
});

export default DataSlice;
