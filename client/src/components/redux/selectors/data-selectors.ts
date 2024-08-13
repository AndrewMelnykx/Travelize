import { RootState } from "@redux/reducers/RootReducer";

const departureInputDataSelector = (state: RootState) =>
  state.data.departureInputData;
const arrivalInputDataSelector = (state: RootState) =>
  state.data.arrivalInputData;
const hotelsDataSelector = (state: RootState) => state.data.hotelsData;

const ticketsDataSelector = (state: RootState) => state.data.ticketsData;

export {
  departureInputDataSelector,
  arrivalInputDataSelector,
  hotelsDataSelector,
  ticketsDataSelector,
};
