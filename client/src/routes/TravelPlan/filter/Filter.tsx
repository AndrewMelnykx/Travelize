import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

import {
  adultsSelector,
  arrivalSelector,
  departureSelector,
} from "@store/selectors/components-selectors";

import { Box, useMediaQuery } from "@mui/material";
import CustomSelect from "@custom-ui/select";
import CustomInput from "@custom-ui/input";
import TravelAutocomplete from "./Autocomplete";
import TravelFilterCustomButton from "./Button";

import TicketsAnimation from "../../../components/tickets-animation/TicketsAnimation";
import "react-toastify/dist/ReactToastify.css";

const TravelPlanFilter = () => {
  const isSmallScreen = useMediaQuery("(max-width: 850px)");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const arrivalCity = useSelector(arrivalSelector);
  const departureCity = useSelector(departureSelector);
  const passengersQuantity = useSelector(adultsSelector);

  const setDepartureDateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(e.target.value);
  };
  const setReturnDateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setReturnDate(e.target.value);
  };

  return (
    <Box
      display={"flex"}
      alignSelf={"center"}
      ml={5}
      width={"50%"}
      gap={10}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box display="flex" width={"100%"} flexDirection={"column"} color={"inherit"}>
        <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"} position={"relative"}>
          <TravelAutocomplete />
        </Box>
      </Box>
      <Box display="flex" width={"100%"} flexDirection={"column"}>
        <Box
          width={"100%"}
          height={"1%"}
          sx={{ background: "transparent" }}
          display={"flex"}
          alignSelf={"center"}
          top={isSmallScreen ? "-15%" : "-20%"}
          mb={isSmallScreen ? "-20%" : "-15%"}
        >
          <TicketsAnimation />
        </Box>
        <CustomSelect label={"Passengers"} labelId={"label-passengers-id"} />
        <CustomInput
          id="departureDate"
          name="departureDate"
          label=""
          type="date"
          value={departureDate}
          onChange={setDepartureDateValue}
        />
        <label
          style={{
            color: "white",
            display: "flex",
            marginTop: "2%",
            alignSelf: "flex-end",
          }}
        >
          Departure on
        </label>
        <CustomInput
          id="returnDate"
          name="returnDate"
          label=""
          type="date"
          value={returnDate}
          onChange={setReturnDateValue}
        />
        <label
          style={{
            color: "white",
            display: "flex",
            marginBottom: "2%",
            marginTop: "2%",
            alignSelf: "flex-end",
          }}
        >
          Return on
        </label>
      </Box>
      <TravelFilterCustomButton
        departureCity={departureCity}
        arrivalCity={arrivalCity}
        passengersQuantity={passengersQuantity.toString()}
        departureDate={departureDate}
        returnDate={returnDate}
      />
    </Box>
  );
};

export default TravelPlanFilter;
