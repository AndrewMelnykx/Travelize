import React from "react";
import { useSelector } from "react-redux";
import { arrivalSelector, departureSelector } from "@store/selectors/components-selectors";
import { TicketsDataItem } from "@store/types";

import { Box, Typography } from "@mui/material";

import { symbolT, wordTimeInsteadT } from "@helpers/constants";
import FlightImage from "@assets/images/flight-card.png";

const TravelPlanCardTemplate: React.FC<{ ticket: TicketsDataItem }> = ({ ticket }) => {
  const cityArrival = useSelector(arrivalSelector);
  const cityDeparture = useSelector(departureSelector);

  const ticketDepartureTime = ticket.itineraries[0].segments[0].departure.at.replace(
    symbolT,
    wordTimeInsteadT,
  );
  const ticketArrivalTime = ticket.itineraries[0].segments[0].arrival.at.replace(
    symbolT,
    wordTimeInsteadT,
  );
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        position="relative"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        width={{ xs: "90%", sm: "90%", md: "420px" }}
        height={{ xs: "90%", sm: "90%", md: "250px" }}
        sx={{
          borderRadius: "1.5rem",
          overflow: "hidden",
          backgroundColor: "#301934",
          boxShadow: "#301934 0px 3px 8px;",
        }}
        mr={2}
      >
        <Box
          component="img"
          src={FlightImage}
          alt="Example image"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <Box
          display="flex"
          position="absolute"
          mb="5%"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent={"flex-start"}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            width={{
              xs: "190%",
              sm: "200%",
              md: "225%",
            }}
            top={{
              xs: "25%",
              sm: "28%",
              md: "30%",
            }}
            left={{
              xs: "-40%",
              sm: "-40%",
              md: "-60%",
            }}
          >
            <Typography color="white">{cityDeparture}</Typography>

            <Typography color="white">{cityArrival}</Typography>
          </Box>
          <Typography color="white" mt={"10%"} fontSize={"15px"}>
            Arrival at :
            <Typography
              sx={{ "&:hover": { color: "white" } }}
              mt={"2%"}
              fontSize={"13px"}
              color={"#40E0D0"}
            >
              {ticketArrivalTime}
            </Typography>
          </Typography>
          <Typography
            color={"white"}
            flexDirection={"column"}
            mt={{ xs: "50%", sm: "60%", md: "65%" }}
            fontSize={"15px"}
            left={0}
          >
            Departure at :
            <Typography color={"#40E0D0"} sx={{ "&:hover": { color: "white" } }} fontSize={"13px"}>
              {ticketDepartureTime}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TravelPlanCardTemplate;
