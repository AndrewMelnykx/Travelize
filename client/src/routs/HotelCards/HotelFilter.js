import React from "react";
import { Paper, Box, FormControl, InputLabel } from "@mui/material";
import CustomInput from "@custom-ui/CustomInputModal";
import CustomSelect from "@custom-ui/CustomSelect";
import LoadingButtonsTransition from "@custom-ui/CustomButton";
const HotelFilter = ({ city, handleCityChange, }) => {
    return (React.createElement(Box, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "400px", width: "300px", gap: 2, mb: 4, mr: 2, ml: 1, sx: { background: "black" } },
        React.createElement(Paper, { sx: {
                height: "100%",
                width: "100%",
                background: "black",
                boxShadow: "rgba(255, 255, 255, 0.7) 0px 3px 8px",
            } },
            React.createElement(Box, { ml: 1 },
                React.createElement(CustomInput, { id: "city-input", type: "string", name: "city-input", value: city, onChange: handleCityChange, label: "City" }),
                React.createElement(FormControl, { variant: "standard", sx: {
                        width: "100%",
                        marginTop: "10%",
                    } },
                    React.createElement(InputLabel, { id: "filter-select" },
                        React.createElement("i", null, " Adults:")),
                    React.createElement(CustomSelect, { label: "Guests", labelId: "label-guests-id" })),
                React.createElement(LoadingButtonsTransition, { city: city })))));
};
export default HotelFilter;
