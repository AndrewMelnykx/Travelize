import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import TravelPlanCards from "../cards/TravelPlanCards";
const TicketsPage = () => {
    const isSmallScreen = useMediaQuery("(max-width: 850px)");
    return (React.createElement(Box, { height: "200vh", sx: { background: "black" }, display: "flex", alignItems: "center", justifyContent: "center" },
        React.createElement(Typography, { variant: "h2", color: "Yellow", mt: isSmallScreen ? "35% " : "10%", sx: {
                position: "absolute",
                top: "0",
                "&:hover": {
                    color: "white",
                },
            } }, "Tickets list"),
        React.createElement(Box, { mt: "-10%" },
            React.createElement(TravelPlanCards, null))));
};
export default TicketsPage;
