import React from "react";
import { Autocomplete, Typography, Grid, TextField } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
const CustomAutocomplete = ({ handleChangeOfTheInput, setOptionsForInputs, setValueForInput, label, options, value, }) => {
    return (React.createElement(Autocomplete, { id: "fetch-data", sx: {
            marginTop: "2%",
            marginBottom: "5%",
            width: "100%",
            border: "1px solid white",
            color: "white",
            background: "black",
            "& .MuiAutocomplete-inputRoot": {
                background: "black",
                color: "white",
            },
            "& .MuiAutocomplete-popupIndicator": {
                color: "white",
            },
            "& .MuiAutocomplete-endAdornment": {
                color: "white",
            },
        }, getOptionLabel: (option) => option.city, filterOptions: (x) => x, options: options, autoComplete: true, includeInputInList: true, value: value, filterSelectedOptions: true, noOptionsText: "No locations", onChange: (event, newValue) => {
            setOptionsForInputs([...options]);
            setValueForInput(event, newValue);
        }, onInputChange: (event, newInputValue) => {
            handleChangeOfTheInput(event, newInputValue);
        }, renderInput: (params) => (React.createElement(TextField, { ...params, label: label, fullWidth: true, sx: {
                color: "white",
                background: "black",
                "& .MuiInputLabel-root": {
                    color: "white",
                },
                "& .MuiInputBase-input": {
                    color: "white",
                },
            } })), renderOption: (props, option) => {
            const { key, ...optionProps } = props;
            return (React.createElement("li", { key: key, ...optionProps, style: { background: "black" } },
                React.createElement(Grid, { container: true, sx: { alignItems: "center", color: "white" } },
                    React.createElement(Grid, { item: true, sx: { display: "flex", width: 44 } },
                        React.createElement(LocationOn, { sx: { color: "white" } })),
                    React.createElement(Grid, { item: true, sx: {
                            width: "calc(100% - 44px)",
                            wordWrap: "break-word",
                        } },
                        React.createElement(Typography, { variant: "body2", color: "white" }, option.city)))));
        } }));
};
export default CustomAutocomplete;
