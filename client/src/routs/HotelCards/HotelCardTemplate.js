import { Card, CardMedia, Paper, Box, CardContent, Typography, useMediaQuery, Button, } from "@mui/material";
import HotelImageSample from "@assets/images/cards-images/hotel-image.jpg";
import React from "react";
const CardTemplate = ({ hotel }) => {
    const isScreenSmall = useMediaQuery("(max-width:600px)");
    const hotelPrices = hotel.offers.map((hotelItem) => hotelItem.price.total);
    const currency = hotel.offers.map((hotelItem) => hotelItem.price.currency);
    const beds = hotel.offers.map((hotelItem) => hotelItem.room.typeEstimated.beds);
    const guests = hotel.offers.map((hotelItem) => hotelItem.guests.adults);
    return (React.createElement(Paper, { sx: {
            boxShadow: "rgba(255, 255, 255, 0.7) 0px 3px 8px",
        } },
        React.createElement(Card, { sx: {
                width: `${isScreenSmall ? "200px" : "400px"}`,
                background: "black",
                color: "white",
            } },
            React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center" },
                React.createElement(CardMedia, { component: "img", sx: { width: "100%", margin: "0" }, image: HotelImageSample, alt: hotel.hotel.name, height: "100%" })),
            React.createElement(Box, { display: "flex", flexDirection: "column", maxHeight: "200px", minHeight: "200px" },
                React.createElement(CardContent, { sx: { height: "100%" } },
                    React.createElement(Typography, { sx: { fontSize: "0.8rem" } }, "Hotel image sample*"),
                    React.createElement(Typography, { variant: "h5" },
                        " ",
                        hotel.hotel.name),
                    React.createElement(Typography, { variant: "h6" },
                        "Price per night: ",
                        hotelPrices,
                        " ",
                        currency),
                    React.createElement(Box, { display: "flex" },
                        React.createElement(Typography, { variant: "h6" },
                            " Beds: ",
                            beds),
                        React.createElement(Typography, { variant: "h6", sx: { marginLeft: "5%" } },
                            " ",
                            "Guests: ",
                            guests),
                        React.createElement(Button, { sx: {
                                ml: "5%",
                                color: "black",
                                background: "white",
                                "&:hover": {
                                    background: "gray",
                                    color: "black",
                                },
                            } }, "Book")))))));
};
export default CardTemplate;
