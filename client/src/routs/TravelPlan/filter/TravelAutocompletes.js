import CustomAutocomplete from "@custom-ui/CustomAutocomplete";
import React, { useCallback, useState } from "react";
import { UseStoreDispatcher } from "@redux/store/store";
import { fetchCitySuggestionsDepartureThunk, fetchCitySuggestionsArrivalThunk, } from "@redux/slices/actions-slice";
import { useSelector } from "react-redux";
import { arrivalInputDataSelector, departureInputDataSelector, } from "@redux/selectors/data-selectors";
import { Box, debounce, useMediaQuery } from "@mui/material";
import { toast } from "react-toastify";
import FilterSlice from "@redux/slices/filter-slice";
const TravelAutocomplete = () => {
    const [cityArrival, setCityArrival] = useState("");
    const [cityDeparture, setCityDeparture] = useState("");
    const [cityDepartureSelectedValue, setCityDepartureSelectedValue] = useState(null);
    const [cityArrivalSelectedValue, setCityArrivalSelectedValue] = useState(null);
    const [options, setOptions] = useState([]);
    const isSmallScreen = useMediaQuery("max-width:600px");
    const dispatch = UseStoreDispatcher();
    const departureInputData = useSelector(departureInputDataSelector);
    const arrivalInputData = useSelector(arrivalInputDataSelector);
    const fetchCityDepartureSuggestionsDebounced = useCallback(debounce(async (newCity) => {
        try {
            await dispatch(fetchCitySuggestionsDepartureThunk(newCity));
            console.log("fetch");
        }
        catch (error) {
            toast.error("Failed to fetch new city, please try again later");
        }
    }, 1100), []);
    const fetchCityArrivalSuggestionsDebounced = useCallback(debounce(async (newCity) => {
        try {
            await dispatch(fetchCitySuggestionsArrivalThunk(newCity));
            console.log("fetch");
        }
        catch (error) {
            toast.error("Failed to fetch new city, please try again later");
        }
    }, 1100), []);
    const handleInputChangeDeparture = (event) => {
        const newValue = event.target.value;
        setCityDeparture(newValue);
        setCityDepartureSelectedValue(null);
        fetchCityDepartureSuggestionsDebounced(newValue);
        dispatch(FilterSlice.actions.handleDepartureCityValue(cityDeparture));
    };
    const handleInputChangeArrival = (event) => {
        const newValue = event.target.value;
        setCityArrival(newValue);
        setCityArrivalSelectedValue(null);
        fetchCityArrivalSuggestionsDebounced(newValue);
        dispatch(FilterSlice.actions.handleArrivalCityValue(cityArrival));
    };
    const handleCitySelectDeparture = (event, selectedCity) => {
        setCityDepartureSelectedValue(selectedCity);
        setCityDeparture(selectedCity?.city || "");
    };
    const handleCitySelectArrival = (event, selectedCity) => {
        setCityArrivalSelectedValue(selectedCity);
        setCityArrival(selectedCity?.city || "");
    };
    return (React.createElement(Box, { mt: `${isSmallScreen ? "25%" : "10%"}` },
        React.createElement(CustomAutocomplete, { handleChangeOfTheInput: handleInputChangeDeparture, options: departureInputData, label: "From ...", setOptionsForInputs: setOptions, setValueForInput: handleCitySelectDeparture, value: cityDepartureSelectedValue }),
        React.createElement(CustomAutocomplete, { handleChangeOfTheInput: handleInputChangeArrival, options: arrivalInputData, setValueForInput: handleCitySelectArrival, setOptionsForInputs: setOptions, value: cityArrivalSelectedValue, label: "To ..." })));
};
export default TravelAutocomplete;
