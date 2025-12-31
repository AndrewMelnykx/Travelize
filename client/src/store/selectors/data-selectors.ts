import { RootState } from "@store/RootReducer";
import { TicketsDataItem } from "@store/types";

const departureInputDataSelector = (state: RootState) => state.data.departureInputData;
const arrivalInputDataSelector = (state: RootState) => state.data.arrivalInputData;
const hotelsDataSelector = (state: RootState) => state.data.hotelsData;

const ticketsDataSelector = (state: RootState): TicketsDataItem[] => state.data.ticketsData;

export {
  departureInputDataSelector,
  arrivalInputDataSelector,
  hotelsDataSelector,
  ticketsDataSelector,
};
