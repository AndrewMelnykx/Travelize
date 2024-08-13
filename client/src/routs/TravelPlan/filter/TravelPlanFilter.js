import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import CustomInput from "@custom-ui/CustomInputModal";
import "react-toastify/dist/ReactToastify.css";
import TravelAutocomplete from "./TravelAutocompletes";
import { useSelector } from "react-redux";
import { adultsSelector, arrivalSelector, departureSelector, } from "@redux/selectors/components-selectors";
import CustomSelect from "@custom-ui/CustomSelect";
import TicketsAnimation from "../../../components/tickets-animation/TicketsAnimation";
import TravelFilterCustomButton from "./TarvelFilterCustomButton";
const TravelPlanFilter = () => {
    const isSmallScreen = useMediaQuery("(max-width: 850px)");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const arrivalCity = useSelector(arrivalSelector);
    const departureCity = useSelector(departureSelector);
    const passengersQuantity = useSelector(adultsSelector);
    const setDepartureDateValue = (e) => {
        setDepartureDate(e.target.value);
    };
    const setReturnDateValue = (e) => {
        setReturnDate(e.target.value);
    };
    return (React.createElement(Box, { display: "flex", alignSelf: "center", ml: 5, width: "50%", gap: 10, alignItems: "center", flexDirection: "column" },
        React.createElement(Box, { display: "flex", width: "100%", flexDirection: "column", color: "inherit" },
            React.createElement(Box, { display: "flex", flexDirection: "column", gap: 1, width: "100%", position: "relative" },
                React.createElement(TravelAutocomplete, null))),
        React.createElement(Box, { display: "flex", width: "100%", flexDirection: "column" },
            React.createElement(Box, { width: "100%", height: "1%", sx: { background: "transparent" }, display: "flex", alignSelf: "center", top: isSmallScreen ? "-15%" : "-20%", mb: isSmallScreen ? "-20%" : "-15%" },
                React.createElement(TicketsAnimation, null)),
            React.createElement(CustomSelect, { label: "Passengers", labelId: "label-passengers-id" }),
            React.createElement(CustomInput, { id: "departureDate", name: "departureDate", label: "", type: "date", value: departureDate, onChange: setDepartureDateValue }),
            React.createElement("label", { style: {
                    color: "white",
                    display: "flex",
                    marginTop: "2%",
                    alignSelf: "flex-end",
                } }, "Departure on"),
            React.createElement(CustomInput, { id: "returnDate", name: "returnDate", label: "", type: "date", value: returnDate, onChange: setReturnDateValue }),
            React.createElement("label", { style: {
                    color: "white",
                    display: "flex",
                    marginBottom: "2%",
                    marginTop: "2%",
                    alignSelf: "flex-end",
                } }, "Return on")),
        React.createElement(TravelFilterCustomButton, { departureCity: departureCity, arrivalCity: arrivalCity, passengersQuantity: passengersQuantity.toString(), departureDate: departureDate, returnDate: returnDate })));
};
export default TravelPlanFilter;
