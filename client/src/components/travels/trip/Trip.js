import React, { forwardRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { TripCard } from "./TripTemplate";
import { cardsData } from "@data/static-data/cards-data";
const TripCards = forwardRef((props, ref) => {
    const isSmallScreen = useMediaQuery("(max-width: 850px)");
    return (React.createElement(Box, { ref: ref, id: "activities" },
        React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", mb: 4 },
            React.createElement(Typography, { variant: "h2", mt: 5 }, "Recent Trips"),
            React.createElement(Typography, { variant: "h4" }, "You can discover new destinations within Google Maps")),
        React.createElement(Box, { display: "flex", sx: {
                flexDirection: isSmallScreen ? "column" : "row",
                marginBottom: isSmallScreen ? "10%" : "0%",
            } }, cardsData.map((card) => (React.createElement(TripCard, { title: card.title, text: card.text, image: card.image, key: card.id }))))));
});
export default TripCards;
