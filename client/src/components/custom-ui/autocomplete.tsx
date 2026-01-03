import React, { SyntheticEvent } from "react";
import { Autocomplete, Typography, Grid, TextField } from "@mui/material";
////Commit
//.

import { LocationOn } from "@mui/icons-material";
import { City } from "@store/types";
import { CustomAutocompleteProps } from "./types";
import { darkPurpleColor } from "@helpers/constants";

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
        border: "none",
        color: "white",
        background: `${darkPurpleColor}`,
        "& .MuiAutocomplete-inputRoot": {
          background: `${darkPurpleColor}`,
          color: "white",
        },

        "& .MuiAutocomplete-popupIndicator": {
          color: "white",
        },
        "& .MuiAutocomplete-endAdornment": {
          color: "white",
        },
        "& .MuiAutocomplete-paper": {
          backgroundColor: darkPurpleColor,
          color: "white",
          borderRadius: "1rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        },

        "& .MuiAutocomplete-option": {
          color: "white",
          "&[aria-selected='true']": { backgroundColor: "#5a1a7e" },
          "&:hover": { backgroundColor: "#6b2b9f" },
        },
      }}
      getOptionLabel={(option: City) => option.city}
      filterOptions={x => x}
      options={options}
      autoComplete
      includeInputInList
      value={value}
      filterSelectedOptions
      noOptionsText="No locations"
      onChange={(event: SyntheticEvent<Element, Event>, newValue: City | null) => {
        setOptionsForInputs([...options]);
        setValueForInput(event, newValue);
      }}
      onInputChange={(event, newInputValue) => {
        handleChangeOfTheInput(event, newInputValue);
      }}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          fullWidth
          sx={{
            "& .MuiInputLabel-root": {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
            "& .MuiInputBase-input": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "gold", borderRadius: "1rem" },
              "&:hover fieldset": { borderColor: "gold" },
              "&.Mui-focused fieldset": { borderColor: "gold" },
            },
          }}
        />
      )}
      renderOption={(props, option, { selected }) => {
        return (
          <li {...props} style={{ padding: 0 }}>
            <Grid
              container
              sx={{
                alignItems: "center",
                color: "white",
                backgroundColor: selected ? "#5a1a7e" : darkPurpleColor,
                "&:hover": {
                  backgroundColor: "#6b2b9f",
                },
                px: 1,
              }}
            >
              <Grid item sx={{ display: "flex", width: 44 }}>
                <LocationOn sx={{ color: "white" }} />
              </Grid>
              <Grid
                item
                sx={{ width: "calc(100% - 44px)", wordWrap: "break-word", height: "100%" }}
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
