import { Box, Typography } from "@mui/material";
import TravelIconsItem from "./TravelIconsItem";

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
      alignItems={"center"}
      ml={"2%"}
      width={"100%"}
    >
      <Box alignSelf={"flex-end"} flexDirection={"column"}>
        <TravelIconsItem
          cityArrival={cityArrival}
          cityDeparture={cityDeparture}
        />

        <Typography
          variant="h6"
          color={"white"}
          flexDirection={"column"}
          mt={"2%"}
        >
          Departure at :
          <Typography
            variant="h6"
            color={"yellow"}
            sx={{ "&:hover": { color: "white" } }}
          >
            {ticketDepartureTime}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default TravelPlanPriceItem;
