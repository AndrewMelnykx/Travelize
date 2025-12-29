import {
  Card,
  CardMedia,
  Paper,
  Box,
  CardContent,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { HotelDataItem } from "@redux/types";
import HotelImageSample from "@assets/images/cards-images/hotel-image.jpg";
import React from "react";

const CardTemplate: React.FC<{ hotel: HotelDataItem }> = ({ hotel }) => {
  const isScreenSmall = useMediaQuery("(max-width:600px)");

  const hotelPrices = hotel.offers.map((hotelItem) => hotelItem.price.total);
  const currency = hotel.offers.map((hotelItem) => hotelItem.price.currency);
  const beds = hotel.offers.map(
    (hotelItem) => hotelItem.room.typeEstimated.beds
  );
  const guests = hotel.offers.map((hotelItem) => hotelItem.guests.adults);
  return (
    <Paper
      sx={{
        boxShadow: "rgba(255, 255, 255, 0.7) 0px 3px 8px",
      }}
    >
      <Card
        sx={{
          width: `${isScreenSmall ? "200px" : "400px"}`,
          background: "black",
          color: "white",
        }}
      >
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <CardMedia
            component={"img"}
            sx={{ width: "100%", margin: "0" }}
            image={HotelImageSample}
            alt={hotel.hotel.name}
            height={"100%"}
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          maxHeight={"200px"}
          minHeight={"200px"}
        >
          <CardContent sx={{ height: "100%" }}>
            <Typography sx={{ fontSize: "0.8rem" }}>
              Hotel image sample*
            </Typography>
            <Typography variant="h5"> {hotel.hotel.name}</Typography>
            <Typography variant="h6">
              Price per night: {hotelPrices} {currency}
            </Typography>
            <Box display={"flex"}>
              <Typography variant="h6"> Beds: {beds}</Typography>
              {/* <Box display={"flex"} width={"100%"}> */}
              <Typography variant="h6" sx={{ marginLeft: "5%" }}>
                {" "}
                Guests: {guests}
              </Typography>
              <Button
                sx={{
                  ml: "5%",
                  color: "black",
                  background: "white",
                  "&:hover": {
                    background: "gray",
                    color: "black",
                  },
                }}
              >
                Book
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Paper>
  );
};

export default CardTemplate;
