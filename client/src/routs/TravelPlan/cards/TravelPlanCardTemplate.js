import { symbolT, wordTimeInsteadT } from "@helpers/constants";
import { Box, IconButton } from "@mui/material";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import React from "react";
import TravelPlanPriceItem from "./TravelPlanPriceItem";
import { useSelector } from "react-redux";
import { arrivalSelector, departureSelector, } from "@redux/selectors/components-selectors";
const TravelPlanCardTemplate = ({ ticket, }) => {
    const cityArrival = useSelector(arrivalSelector);
    const cityDeparture = useSelector(departureSelector);
    const ticketDepartureTime = ticket.itineraries[0].segments[0].departure.at.replace(symbolT, wordTimeInsteadT);
    const ticketArrivalTime = ticket.itineraries[0].segments[0].arrival.at.replace(symbolT, wordTimeInsteadT);
    return (React.createElement(Box, { display: "flex", flexDirection: "column", alignItems: "center" },
        React.createElement(Box, { display: "flex", width: "500px", height: "250px", sx: { border: "1px solid white", borderRadius: "5px" } },
            React.createElement(IconButton, { sx: {
                    width: "60px",
                    height: "60px",
                    background: "transparent",
                    position: "absolute",
                } },
                React.createElement(FmdBadIcon, { sx: {
                        background: "transparent",
                        color: "white",
                        width: "100%",
                        height: "100%",
                    } })),
            React.createElement(TravelPlanPriceItem, { ticketArrivalTime: ticketArrivalTime, ticketDepartureTime: ticketDepartureTime, cityArrival: cityArrival, cityDeparture: cityDeparture }))));
};
export default TravelPlanCardTemplate;
