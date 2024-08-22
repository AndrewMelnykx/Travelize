import React from "react";
import { Paper, Box, FormControl, InputLabel } from "@mui/material";
import CustomInput from "@custom-ui/CustomInputModal";
import CustomSelect from "@custom-ui/CustomSelect";
import LoadingButtonsTransition from "@custom-ui/CustomButton";

const HotelFilter = ({
  city,
  handleCityChange,
}: {
  city: string;
  handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      height={"400px"}
      width={"300px"}
      gap={2}
      mb={4}
      mr={2}
      ml={1}
      sx={{ background: "black" }}
    >
      <Paper
        sx={{
          height: "100%",
          width: "100%",
          background: "black",
          boxShadow: "rgba(255, 255, 255, 0.7) 0px 3px 8px",
        }}
      >
        <Box ml={1}>
          <CustomInput
            id="city-input"
            type="string"
            name="city-input"
            value={city}
            onChange={handleCityChange}
            label="City"
          />
          <FormControl
            variant="standard"
            sx={{
              width: "100%",
              marginTop: "10%",
            }}
          >
            <InputLabel id="filter-select">
              <i> Adults:</i>
            </InputLabel>
            <CustomSelect label={"Guests"} labelId={"label-guests-id"} />
          </FormControl>
          <LoadingButtonsTransition city={city} />
        </Box>
      </Paper>
    </Box>
  );
};

export default HotelFilter;
