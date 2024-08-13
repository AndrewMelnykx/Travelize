import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import PlaceIcon from "@mui/icons-material/Place";
const TravelPlanPriceItem = ({ ticketArrivalTime, ticketDepartureTime, cityArrival, cityDeparture, }) => {
    return (React.createElement(Box, { display: "flex", justifyContent: "space-between", alignItems: "flex-end", ml: "2%", width: "100%" },
        React.createElement(Box, { alignSelf: "flex-end" },
            React.createElement(Typography, { variant: "h5", ml: "5%" }, cityDeparture),
            React.createElement(Icon, { sx: {
                    color: "aquamarine",
                    height: "100%",
                    width: "100%",
                    ml: "-20%",
                    mb: "2%",
                } },
                " ",
                React.createElement(AirplaneTicketIcon, { sx: { width: "60px", height: "60px" } })),
            React.createElement(Icon, { sx: {
                    color: "yellow",
                    height: "100%",
                    width: "100%",
                    ml: "-20%",
                } },
                " ",
                React.createElement(PlaceIcon, { sx: { width: "30px", height: "30px" } })),
            React.createElement(Typography, { variant: "h6", color: "white" },
                "Departure at :",
                " ",
                React.createElement(Typography, { variant: "h6", color: "yellow", sx: { "&:hover": { color: "white" } } }, ticketDepartureTime))),
        React.createElement(Box, { width: "25%", height: "5px", sx: {
                background: "aquamarine",
                alignSelf: "center",
                justifySelf: "center",
                position: "absolute",
                mt: "2%",
                ml: "2%",
            } }),
        React.createElement(Box, null,
            React.createElement(Typography, { variant: "h5", ml: "40%" }, cityArrival),
            React.createElement(Icon, { sx: {
                    color: "aquamarine",
                    ml: "5%",
                    height: "100%",
                    width: "100%",
                } },
                " ",
                React.createElement(AirplaneTicketIcon, { sx: { width: "60px", height: "60px" } })),
            React.createElement(Icon, { sx: {
                    color: "yellow",
                    height: "100%",
                    width: "100%",
                    ml: "5%",
                } },
                " ",
                React.createElement(PlaceIcon, { sx: { width: "30px", height: "30px" } })),
            React.createElement(Typography, { variant: "h6", color: "white", ml: "25%" },
                "Arrival at :",
                React.createElement(Typography, { variant: "h6", color: "yellow", sx: { "&:hover": { color: "white" } } }, ticketArrivalTime)))));
};
export default TravelPlanPriceItem;
