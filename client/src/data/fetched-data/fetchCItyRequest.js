import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const baseForMovieSearch = import.meta.env.VITE_TRAVEL_APP_CITY_SEARCH_BASE;
const fetchCitySuggestions = async (inputValue) => {
    const token = Cookies.get("userToken");
    try {
        const response = await axios.get(baseForMovieSearch, {
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
    catch (error) {
        toast.error("Failed to fetch please try again later");
        console.error("Failed to fetch", error);
        return { items: [] };
    }
};
export default fetchCitySuggestions;
