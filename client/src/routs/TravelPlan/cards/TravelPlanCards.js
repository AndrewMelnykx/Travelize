import { Box } from "@mui/material";
import { ticketsDataSelector } from "@redux/selectors/data-selectors";
import React from "react";
import { useSelector } from "react-redux";
import TravelPlanCardTemplate from "./TravelPlanCardTemplate";
const TravelPlanCards = () => {
    const ticketssData = useSelector(ticketsDataSelector);
    return (React.createElement(Box, { zIndex: "10", display: "grid", gridTemplateColumns: "repeat(3,1fr)", rowGap: 0, columnGap: 1, height: "100vh" }, ticketssData.map((ticket) => (React.createElement(TravelPlanCardTemplate, { ticket: ticket, key: ticket.id })))));
};
export default TravelPlanCards;
