import { Box } from "@mui/material";
import TravelPlanCards from "../cards/TravelPlanCards";

const TicketsPage = () => {
  return (
    <Box
      height={"200vh"}
      sx={{ background: "black" }}
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      zIndex={-1}
    >
      <Box mt={"5%"}>
        <TravelPlanCards />
      </Box>
    </Box>
  );
};

export default TicketsPage;
