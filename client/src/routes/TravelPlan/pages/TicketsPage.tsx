import { Box } from "@mui/material";
import TravelPlanCards from "../cards/cards";

const TicketsPage = () => {
  return (
    <Box
      height={"200vh"}
      sx={{ background: "black" }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={-1}
      width={"100%"}
    >
      <Box mt={"5%"}>
        <TravelPlanCards />
      </Box>
    </Box>
  );
};

export default TicketsPage;
