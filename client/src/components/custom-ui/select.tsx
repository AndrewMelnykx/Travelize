import React from "react";
import { useSelector } from "react-redux";

import { UseStoreDispatcher } from "@store/index";
import { adultsSelector } from "@store/selectors/components-selectors";
import { FilterActions } from "@store/slices/filter-slice";

import { Select, MenuItem, SelectChangeEvent, InputLabel, FormControl } from "@mui/material";
import { adultsSelectOptionsData } from "@data/static-data/inputs-data";
import { darkPurpleColor } from "@helpers/constants";

const CustomSelect = ({ label, labelId }: { label: string; labelId: string }) => {
  const dispatch = UseStoreDispatcher();
  const selectAdultsState = useSelector(adultsSelector);

  const handleSettingAdults = (event: SelectChangeEvent<any>) => {
    dispatch(FilterActions.handleSelectAdultState(event.target.value));
  };

  return (
    <FormControl sx={{ mt: 2, width: "100%", position: "relative" }}>
      <InputLabel
        id={labelId}
        sx={{
          color: "white",
          "&.Mui-focused": { color: "white" },
        }}
      >
        {label}
      </InputLabel>

      <Select
        labelId={labelId}
        value={selectAdultsState}
        onChange={handleSettingAdults}
        sx={{
          backgroundColor: darkPurpleColor,
          color: "white",
          borderRadius: "1rem",
          fontSize: "1.1rem",
          "& .MuiSelect-select": { color: "white", padding: "10px" },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "gold" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "gold" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "gold" },
          "& .MuiSelect-icon": { color: "white" },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: darkPurpleColor,
              color: "white",
              borderRadius: "1rem",
              "& .MuiMenuItem-root": {
                color: "white",
                backgroundColor: darkPurpleColor,
                "&:hover": { backgroundColor: "#6b2b9f" },
                "&.Mui-selected": { backgroundColor: "#5a1a7e" },
              },
            },
          },
        }}
      >
        {adultsSelectOptionsData.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
