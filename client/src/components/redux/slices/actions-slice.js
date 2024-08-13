import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchCitySuggestions from "@data/fetched-data/fetchCItyRequest";
import fetchHotels from "@data/fetched-data/fetchHotelsRequest";
import fetchTickets from "@data/fetched-data/fetchTIcketsRequest";
const fetchCitySuggestionsDepartureThunk = createAsyncThunk("data/fetchCitySuggestionsDeparture", async (inputValue) => {
    const response = await fetchCitySuggestions(inputValue);
    return response;
});
const fetchCitySuggestionsArrivalThunk = createAsyncThunk("data/fetchCitySuggestionsArrival", async (inputValue) => {
    const response = await fetchCitySuggestions(inputValue);
    return response;
});
const fetchHotelsDataThunk = createAsyncThunk("data/fetchHotelsData", async ({ cityName, adultsQuantity, }) => {
    const response = await fetchHotels(cityName, adultsQuantity);
    return response;
});
const fetchTicketsDataThunk = createAsyncThunk("data/fetchTicketsData", async ({ departureCity, arrivalCity, departureDate, returnDate, adults, }) => {
    const response = await fetchTickets(departureCity, arrivalCity, departureDate, returnDate, adults);
    const limitedResponse = response.slice(0, 12);
    return limitedResponse;
});
export { fetchCitySuggestionsArrivalThunk, fetchCitySuggestionsDepartureThunk, fetchHotelsDataThunk, fetchTicketsDataThunk, };
