import React from "react";
import { Paper, Box, FormControl, InputLabel, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomInput from "@custom-ui/Input";
import CustomSelect from "@custom-ui/select";
import LoadingButtonsTransition from "@custom-ui/button";
import { darkPurpleColor } from "@helpers/constants";

const HotelFilter = ({
  city,
  handleCityChange,
  handleFilterVisibility,
}: {
  city: string;
  handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterVisibility?: () => void;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: 2,
        transition: "all 0.3s ease",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          background: darkPurpleColor,
          boxShadow: "1px 1px 1px 1px black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "2rem",
          p: 2,
        }}
      >
        <Box display={"flex"}>
          <Typography variant="h5" color="white" mb={1}>
            Search params :
          </Typography>
          <Button
            onClick={handleFilterVisibility}
            sx={{
              width: "2rem",
              height: "2rem",
              color: "white",
              minWidth: 0,
              padding: 0,
              "&:hover": {
                backgroundColor: "transparent",
                color: "gold",
              },
              ml: 6,
              mt: 0.5,
            }}
          >
            <CloseIcon sx={{ position: "absolute", right: 0, top: 0 }} />
          </Button>
        </Box>

        <Box width="100%">
          <CustomInput
            id="city-input"
            type="string"
            name="city-input"
            value={city}
            onChange={handleCityChange}
            label="City"
          />

          <FormControl variant="standard" sx={{ width: "100%", mt: 2 }}>
            <InputLabel>
              <i>Adults</i>
            </InputLabel>
            <CustomSelect label="Guests" labelId={"label-guests-id"} />
          </FormControl>
        </Box>
        <LoadingButtonsTransition city={city} />
      </Paper>
    </Box>
  );
};

export default HotelFilter;
