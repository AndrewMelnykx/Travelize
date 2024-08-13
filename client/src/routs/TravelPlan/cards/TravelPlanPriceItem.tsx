import React from "react";

import { Box, Icon, Typography } from "@mui/material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import PlaceIcon from "@mui/icons-material/Place";

const TravelPlanPriceItem = ({
  ticketArrivalTime,
  ticketDepartureTime,
  cityArrival,
  cityDeparture,
}: {
  ticketArrivalTime: string;
  ticketDepartureTime: string;
  cityArrival: string;
  cityDeparture: string;
}) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"flex-end"}
      ml={"2%"}
      width={"100%"}
    >
      <Box alignSelf={"flex-end"}>
        <Typography variant="h5" ml={"5%"}>
          {cityDeparture}
        </Typography>
        <Icon
          sx={{
            color: "aquamarine",
            height: "100%",
            width: "100%",
            ml: "-20%",
            mb: "2%",
          }}
        >
          {" "}
          <AirplaneTicketIcon sx={{ width: "60px", height: "60px" }} />
        </Icon>
        <Icon
          sx={{
            color: "yellow",
            height: "100%",
            width: "100%",
            ml: "-20%",
          }}
        >
          {" "}
          <PlaceIcon sx={{ width: "30px", height: "30px" }} />
        </Icon>
        <Typography variant="h6" color={"white"}>
          Departure at :{" "}
          <Typography
            variant="h6"
            color={"yellow"}
            sx={{ "&:hover": { color: "white" } }}
          >
            {ticketDepartureTime}
          </Typography>
        </Typography>
      </Box>
      <Box
        width={"25%"}
        height={"5px"}
        sx={{
          background: "aquamarine",
          alignSelf: "center",
          justifySelf: "center",
          position: "absolute",
          mt: "2%",
          ml: "2%",
        }}
      ></Box>
      <Box>
        <Typography variant="h5" ml={"40%"}>
          {cityArrival}
        </Typography>

        <Icon
          sx={{
            color: "aquamarine",
            ml: "5%",
            height: "100%",
            width: "100%",
          }}
        >
          {" "}
          <AirplaneTicketIcon sx={{ width: "60px", height: "60px" }} />
        </Icon>
        <Icon
          sx={{
            color: "yellow",
            height: "100%",
            width: "100%",
            ml: "5%",
          }}
        >
          {" "}
          <PlaceIcon sx={{ width: "30px", height: "30px" }} />
        </Icon>
        <Typography variant="h6" color={"white"} ml={"25%"}>
          Arrival at :
          <Typography
            variant="h6"
            color={"yellow"}
            sx={{ "&:hover": { color: "white" } }}
          >
            {ticketArrivalTime}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default TravelPlanPriceItem;
