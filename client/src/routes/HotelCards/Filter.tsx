import React from "react";
import { Paper, Box, FormControl, InputLabel, Typography } from "@mui/material";
import CustomInput from "@custom-ui/Input";
import CustomSelect from "@custom-ui/select";
import LoadingButtonsTransition from "@custom-ui/button";
import { darkPurpleColor } from "@helpers/constants";

const HotelFilter = ({
  city,
  handleCityChange,
}: {
  city: string;
  handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ml: { xs: 4, md: 0 },
      }}
    >
      <Paper
        sx={{
          height: {
            xs: "40%",
            sm: "90%",
            md: "50%",
          },
          width: {
            xs: "90%",
            sm: "90%",
            md: "30%",
          },
          background: `${darkPurpleColor}`,
          boxShadow: "1px 1px 1px 1px black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "2rem",
        }}
      >
        <Typography variant="h4" color={"white"} mb={1}>
          Search params :
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"60%"}
        >
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
