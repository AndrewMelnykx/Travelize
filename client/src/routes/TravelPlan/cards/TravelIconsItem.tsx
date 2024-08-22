import { Box, Icon, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

const TravelIconsItem = ({
  cityArrival,
  cityDeparture,
}: {
  cityDeparture: string;
  cityArrival: string;
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ background: "transparent" }}
      alignItems={"center"}
      width={"300px"}
      position={"relative"}
      ml={"25%"}
      mt={"15%"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        alignItems={"center"}
      >
        <Icon
          sx={{
            color: "aquamarine",
            height: "120%",
            width: "120%",
            marginLeft: "2%",
          }}
        >
          <AirplaneTicketIcon sx={{ width: "15%", height: "10%" }} />
          <Typography variant="h5" ml={"1%"} color={"white"}>
            {cityDeparture}
          </Typography>
        </Icon>
        <Icon
          sx={{
            color: "aquamarine",
            height: "120%",
            width: "120%",
            mb: "2%",
          }}
        >
          <AirplaneTicketIcon sx={{ width: "15%", height: "10%" }} />
          <Typography variant="h5" color={"white"}>
            {cityArrival}
          </Typography>
        </Icon>
      </Box>

      <Box
        position="relative"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={2}
      >
        <Icon
          sx={{
            color: "yellow",
            position: "absolute",
            left: -5,
            mb: "10%",
          }}
        >
          <PlaceIcon sx={{ width: "30px", height: "30px" }} />
        </Icon>

        <hr
          style={{
            width: "120%",
            height: "5px",
            backgroundColor: "aquamarine",
            border: "none",
          }}
        />

        <Icon
          sx={{
            color: "yellow",
            position: "absolute",
            right: 0,
            mb: "10%",
          }}
        >
          <PlaceIcon sx={{ width: "30px", height: "30px" }} />
        </Icon>
      </Box>
    </Box>
  );
};

export default TravelIconsItem;
