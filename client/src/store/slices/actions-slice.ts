import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";
import { simpleRequestMessages, userToken } from "@helpers/constants";

const token = localStorage.getItem(userToken);
const baseForCity = process.env.VITE_TRAVEL_APP_CITY_SEARCH_BASE;
const baseForHotels = process.env.VITE_TRAVEL_APP_HOTELS_SEARCH_BASE;
const baseForTickets = process.env.VITE_TRAVEL_APP_TICKETS_SEARCH_BASE;

const fetchCitySuggestionsDepartureThunk = createAsyncThunk(
  "data/fetchCitySuggestionsDeparture",
  async (inputValue: string) => {
    try {
      if (baseForCity) {
        const response = await axios.get(baseForCity, {
          params: {
            namePrefix: inputValue,
            limit: 10,
          },

          headers: {
            "x-rapidapi-key": `${token}`,
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          },
        });
        return response.data.data || { items: [] };
      }
    } catch (error) {
      toast.error(simpleRequestMessages.BAD_REQUEST);
      console.error("Failed to fetch", error);
      return { items: [] };
    }
  },
);
const fetchCitySuggestionsArrivalThunk = createAsyncThunk(
  "data/fetchCitySuggestionsArrival",
  async (inputValue: string) => {
    try {
      if (baseForCity) {
        const response = await axios.get(baseForCity, {
          params: {
            namePrefix: inputValue,
            limit: 10,
          },

          headers: {
            "x-rapidapi-key": `${token}`,
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          },
        });
        return response.data.data || { items: [] };
      }
    } catch (error) {
      toast.error(simpleRequestMessages.BAD_REQUEST);
      console.error("Failed to fetch", error);
      return { items: [] };
    }
  },
);

const fetchHotelsDataThunk = createAsyncThunk(
  "data/fetchHotelsData",
  async ({ cityName, adultsQuantity }: { cityName: string; adultsQuantity: string }) => {
    if (baseForHotels) {
      try {
        const response = await axios.get(baseForHotels, {
          params: {
            destination: cityName.toString(),
            adults: adultsQuantity.toString(),
          },
          withCredentials: true,
        });

        return response.data;
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    }
  },
);

const fetchTicketsDataThunk = createAsyncThunk(
  "data/fetchTicketsData",
  async ({
    departureCity,
    arrivalCity,
    departureDate,
    returnDate,
    adults,
  }: {
    departureCity: string;
    arrivalCity: string;
    departureDate: string;
    returnDate: string;
    adults: string;
  }) => {
    // const response = await fetchTickets(
    //   departureCity,
    //   arrivalCity,
    //   departureDate,
    //   returnDate,
    //   adults,
    // );
    // const limitedResponse = response.slice(0, 12);
    // return limitedResponse;
    if (baseForTickets) {
      try {
        const response = await axios.get(baseForTickets, {
          params: {
            originLocationCode: departureCity,
            destinationLocationCode: arrivalCity,
            departureDate: departureDate,
            returnDate: returnDate,
            adults: adults,
          },
          withCredentials: true,
        });

        const limitedResponse = response.data.slice(0, 12);
        return limitedResponse;
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    }
  },
);
export {
  fetchCitySuggestionsArrivalThunk,
  fetchCitySuggestionsDepartureThunk,
  fetchHotelsDataThunk,
  fetchTicketsDataThunk,
};
