import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TravelPlanFilter from "../filter/TravelPlanFilter";
const TravelPlan = () => {
    const isSmallScreen = useMediaQuery("(max-width: 850px)");
    return (React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center", height: "120vh", flexDirection: "column", sx: { background: "black", padding: 0, margin: 0, position: "relative" }, zIndex: "-1" },
        React.createElement(Box, { display: "flex", justifyContent: "center", alignItems: "center", width: isSmallScreen ? "100%" : "50%", color: "white", mt: isSmallScreen ? "15%" : "5%" },
            React.createElement(TravelPlanFilter, null)),
        React.createElement(ToastContainer, null)));
};
export default TravelPlan;
