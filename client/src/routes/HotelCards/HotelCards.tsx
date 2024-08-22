import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import { hotelsDataSelector } from "@redux/selectors/data-selectors";
import CardTemplate from "./HotelCardTemplate";
import HotelFilter from "./HotelFilter";

const HotelCards: React.FC = () => {
  const [city, setCity] = useState("");
  const hotelsDataState = useSelector(hotelsDataSelector);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ background: "black" }}
      justifyContent="center"
      height="110vh"
    >
      <HotelFilter city={city} handleCityChange={handleCityChange} />

      <ToastContainer />
      <Box
        display={"flex"}
        alignSelf={"flex-start"}
        mt={"10%"}
        sx={{ background: "black" }}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(3,1fr)"}
          rowGap={2}
          columnGap={2}
        >
          {hotelsDataState.map((hotel) => (
            <CardTemplate hotel={hotel} key={hotel.hotel.hotelId} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HotelCards;
