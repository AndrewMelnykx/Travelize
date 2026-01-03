import TravelPlanFilter from "../filter/Filter";

import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TravelPlan = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"120vh"}
      flexDirection={"column"}
      sx={{ background: "black", padding: 0, margin: 0, position: "relative" }}
      zIndex={2}
      width={"100%"}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={{ xs: "100%", md: "50%" }}
        mt={{ xs: "10%", md: "-1%" }}
      >
        <TravelPlanFilter />
      </Box>

      <ToastContainer />
    </Box>
  );
};

export default TravelPlan;
