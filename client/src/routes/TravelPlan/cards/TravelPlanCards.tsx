import { Box, useMediaQuery, Typography } from "@mui/material";
import { ticketsDataSelector } from "@redux/selectors/data-selectors";
import { useSelector } from "react-redux";
import TravelPlanCardTemplate from "./TravelPlanCardTemplate";
import ErrorPage from "../pages/ErrorPage";

const TravelPlanCards = () => {
  const ticketsData = useSelector(ticketsDataSelector);
  const isSmallScreen = useMediaQuery("(max-width: 850px)");

  return (
    <Box
      zIndex={"10"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      width={"100%"}
    >
      <Typography
        variant="h2"
        color={"Yellow"}
        mt={isSmallScreen ? "35% " : "5%"}
        sx={{
          "&:hover": {
            color: "white",
          },
        }}
      >
        Tickets list
      </Typography>
      {ticketsData.length > 0 ? (
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(3,1fr)"}
          rowGap={2}
          columnGap={2}
          width={"100%"}
          height={"100%"}
        >
          {ticketsData.map((ticket) => (
            <TravelPlanCardTemplate ticket={ticket} key={ticket.id} />
          ))}
        </Box>
      ) : (
        <ErrorPage />
      )}
    </Box>
  );
};

export default TravelPlanCards;
