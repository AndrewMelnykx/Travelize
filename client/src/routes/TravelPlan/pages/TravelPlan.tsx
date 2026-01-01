import TravelPlanFilter from "../filter/Filter";

import { Box, useMediaQuery } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      zIndex={2}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={isSmallScreen ? "100%" : "50%"}
        mt={isSmallScreen ? "10%" : "-1%"}
      >
        <TravelPlanFilter />
      </Box>

      <ToastContainer />
    </Box>
  );
};

export default TravelPlan;
