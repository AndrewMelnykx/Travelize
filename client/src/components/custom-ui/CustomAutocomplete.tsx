import React, { SyntheticEvent } from "react";
import { Autocomplete, Typography, Grid, TextField } from "@mui/material";

import { LocationOn } from "@mui/icons-material";
import { City } from "@redux/types";
import { CustomAutocompleteProps } from "./types";

const CustomAutocomplete = ({
  handleChangeOfTheInput,
  setOptionsForInputs,
  setValueForInput,
  label,
  options,
  value,
}: CustomAutocompleteProps) => {
  return (
    <Autocomplete
      id="fetch-data"
      sx={{
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
      }}
      getOptionLabel={(option: City) => option.city}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      value={value}
      filterSelectedOptions
      noOptionsText="No locations"
      onChange={(
        event: SyntheticEvent<Element, Event>,
        newValue: City | null
      ) => {
        setOptionsForInputs([...options]);
        setValueForInput(event, newValue);
      }}
      onInputChange={(event, newInputValue) => {
        handleChangeOfTheInput(event, newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          fullWidth
          sx={{
            color: "white",
            background: "black",
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
        />
      )}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;

        return (
          <li key={key} {...optionProps} style={{ background: "black" }}>
            <Grid container sx={{ alignItems: "center", color: "white" }}>
              <Grid item sx={{ display: "flex", width: 44 }}>
                <LocationOn sx={{ color: "white" }} />
              </Grid>
              <Grid
                item
                sx={{
                  width: "calc(100% - 44px)",
                  wordWrap: "break-word",
                }}
              >
                <Typography variant="body2" color="white">
                  {option.city}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
};

export default CustomAutocomplete;
