import React from "react";
import { useSelector } from "react-redux";

import { UseStoreDispatcher } from "@store/index";
import { adultsSelector } from "@store/selectors/components-selectors";
import { FilterActions } from "@store/slices/filter-slice";

import { Select, MenuItem, SelectChangeEvent, InputLabel, FormControl } from "@mui/material";
import { adultsSelectOptionsData } from "@data/static-data/inputs-data";

const CustomSelect = ({ label, labelId }: { label: string; labelId: string }) => {
  const dispatch = UseStoreDispatcher();
  const selectAdultsState = useSelector(adultsSelector);

  const handleSettingAdults = (event: SelectChangeEvent<any>) => {
    dispatch(FilterActions.handleSelectAdultState(event.target.value));
  };

  return (
    <FormControl sx={{ marginTop: "10%", minWidth: 120 }}>
      <InputLabel id="filter-select-label" sx={{ color: "white" }}>
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        onChange={handleSettingAdults}
        value={selectAdultsState}
        label={label}
        sx={{
          mb: "2%",
          borderBottom: "1px solid white",
          fontSize: "1.1rem",
          backgroundColor: "black",
          color: "white",
          "& .MuiSelect-icon": {
            color: "white",
          },
          "& .MuiSelect-select": {
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "black",
              color: "white",
              "& .MuiMenuItem-root": {
                color: "white",
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "gray",
                },
              },
            },
          },
        }}
      >
        {adultsSelectOptionsData.map(item => (
          <MenuItem
            key={item.id}
            value={item.value}
            sx={{
              fontSize: "1.5rem",
              background: "inherit",
              color: "white",
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
