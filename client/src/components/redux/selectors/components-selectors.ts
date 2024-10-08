import { RootState } from "@redux/reducers/RootReducer";
const adultsSelector = (state: RootState) => state.filter.adultsOptionsSelect;
const departureSelector = (state: RootState) =>
  state.filter.departureCityInitial;
const arrivalSelector = (state: RootState) => state.filter.arrivalCityInitial;
const isCloseIconSelector = (state: RootState) =>
  state.filter.isCloseIconVisible;

export {
  adultsSelector,
  departureSelector,
  arrivalSelector,
  isCloseIconSelector,
};
