import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TravelPlanFilter from "../filter/TravelPlanFilter";

const TravelPlan = () => {
  const isSmallScreen = useMediaQuery("(max-width: 850px)");

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"120vh"}
      flexDirection={"column"}
      sx={{ background: "black", padding: 0, margin: 0, position: "relative" }}
      zIndex={"-1"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={isSmallScreen ? "100%" : "50%"}
        color={"white"}
        mt={isSmallScreen ? "15%" : "5%"}
      >
        <TravelPlanFilter />
      </Box>

      <ToastContainer />
    </Box>
  );
};

export default TravelPlan;
