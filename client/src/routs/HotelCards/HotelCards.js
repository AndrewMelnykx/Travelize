import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { hotelsDataSelector } from "@redux/selectors/data-selectors";
import CardTemplate from "./HotelCardTemplate";
import HotelFilter from "./HotelFilter";
const HotelCards = () => {
    const [city, setCity] = useState("");
    const hotelsDataState = useSelector(hotelsDataSelector);
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    return (React.createElement(Box, { display: "flex", alignItems: "center", sx: { background: "black" }, justifyContent: "center", height: "110vh" },
        React.createElement(HotelFilter, { city: city, handleCityChange: handleCityChange }),
        React.createElement(ToastContainer, null),
        React.createElement(Box, { display: "flex", alignSelf: "flex-start", mt: "10%", sx: { background: "black" } },
            React.createElement(Box, { display: "grid", gridTemplateColumns: "repeat(3,1fr)", rowGap: 2, columnGap: 2 }, hotelsDataState.map((hotel) => (React.createElement(CardTemplate, { hotel: hotel, key: hotel.hotel.hotelId })))))));
};
export default HotelCards;
