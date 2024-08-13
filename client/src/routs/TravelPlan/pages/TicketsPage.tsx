import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import TravelPlanCards from "../cards/TravelPlanCards";

const TicketsPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 850px)");
  return (
    <Box
      height={"200vh"}
      sx={{ background: "black" }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography
        variant="h2"
        color={"Yellow"}
        mt={isSmallScreen ? "35% " : "10%"}
        sx={{
          position: "absolute",
          top: "0",
          "&:hover": {
            color: "white",
          },
        }}
      >
        Tickets list
      </Typography>
      <Box mt={"-10%"}>
        <TravelPlanCards />
      </Box>
    </Box>
  );
};

export default TicketsPage;
