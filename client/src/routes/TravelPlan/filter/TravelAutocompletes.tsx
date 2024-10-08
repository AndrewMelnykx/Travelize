import CustomAutocomplete from "@custom-ui/CustomAutocomplete";
import { SyntheticEvent, useCallback, useState } from "react";
import { UseStoreDispatcher } from "@redux/store/store";
import {
  fetchCitySuggestionsDepartureThunk,
  fetchCitySuggestionsArrivalThunk,
} from "@redux/slices/actions-slice";
import { useSelector } from "react-redux";
import {
  arrivalInputDataSelector,
  departureInputDataSelector,
} from "@redux/selectors/data-selectors";
import { City } from "@redux/types";
import { Box, debounce, useMediaQuery } from "@mui/material";
import { toast } from "react-toastify";
import FilterSlice from "@redux/slices/filter-slice";

const TravelAutocomplete = () => {
  const [cityArrival, setCityArrival] = useState<string>("");
  const [cityDeparture, setCityDeparture] = useState<string>("");
  const [cityDepartureSelectedValue, setCityDepartureSelectedValue] =
    useState<City | null>(null);
  const [cityArrivalSelectedValue, setCityArrivalSelectedValue] =
    useState<City | null>(null);
  const [options, setOptions] = useState<City[]>([]);
  const isSmallScreen = useMediaQuery("max-width:600px");
  const dispatch = UseStoreDispatcher();
  const departureInputData = useSelector(departureInputDataSelector);
  const arrivalInputData = useSelector(arrivalInputDataSelector);

  const fetchCityDepartureSuggestionsDebounced = useCallback(
    debounce(async (newCity) => {
      try {
        await dispatch(fetchCitySuggestionsDepartureThunk(newCity));
      } catch (error) {
        toast.error("Failed to fetch new city, please try again later");
      }
    }, 1100),
    []
  );

  const fetchCityArrivalSuggestionsDebounced = useCallback(
    debounce(async (newCity) => {
      try {
        await dispatch(fetchCitySuggestionsArrivalThunk(newCity));
      } catch (error) {
        toast.error("Failed to fetch new city, please try again later");
      }
    }, 1100),
    []
  );

  const handleCitySelectDeparture = (
    event: SyntheticEvent<Element, Event>,
    selectedCity: City | null
  ) => {
    if (selectedCity) {
      setCityDepartureSelectedValue(selectedCity);
      setCityDeparture(selectedCity.city); // Ensure the correct city is set
      dispatch(FilterSlice.actions.handleDepartureCityValue(selectedCity.city));
    }
    console.log("Selected Departure City:", selectedCity?.city);
  };

  const handleCitySelectArrival = (
    event: SyntheticEvent<Element, Event>,
    selectedCity: City | null
  ) => {
    if (selectedCity) {
      setCityArrivalSelectedValue(selectedCity);
      setCityArrival(selectedCity.city);
      dispatch(FilterSlice.actions.handleArrivalCityValue(selectedCity.city));
    }
    console.log("Selected Arrival City:", selectedCity?.city);
  };
  const handleInputChangeDeparture = (
    event: SyntheticEvent<Element, Event>
  ) => {
    const newValue = (event.target as HTMLInputElement).value;
    setCityDeparture(newValue);
    fetchCityDepartureSuggestionsDebounced(newValue);
    dispatch(FilterSlice.actions.handleDepartureCityValue(newValue));
  };

  const handleInputChangeArrival = (event: SyntheticEvent<Element, Event>) => {
    const newValue = (event.target as HTMLInputElement).value;
    setCityArrival(newValue);
    fetchCityArrivalSuggestionsDebounced(newValue);
    dispatch(FilterSlice.actions.handleArrivalCityValue(newValue));
  };

  return (
    <Box mt={`${isSmallScreen ? "25%" : "10%"}`}>
      <CustomAutocomplete
        handleChangeOfTheInput={handleInputChangeDeparture}
        options={departureInputData}
        label="From ..."
        setOptionsForInputs={setOptions}
        setValueForInput={handleCitySelectDeparture}
        value={cityDepartureSelectedValue}
      />
      <CustomAutocomplete
        handleChangeOfTheInput={handleInputChangeArrival}
        options={arrivalInputData}
        setValueForInput={handleCitySelectArrival}
        setOptionsForInputs={setOptions}
        value={cityArrivalSelectedValue}
        label="To ..."
      />
    </Box>
  );
};

export default TravelAutocomplete;
