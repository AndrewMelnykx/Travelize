import React from "react";

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
import { HotelDataItem } from "@store/types";
import HotelImageSample from "@assets/images/cards-images/hotel-image.avif";
import { darkPurpleColor } from "@helpers/constants";

const CardTemplate: React.FC<{ hotel: HotelDataItem }> = ({ hotel }) => {
  const hotelPrices = hotel.offers.map(hotelItem => hotelItem.price.total);
  const currency = hotel.offers.map(hotelItem => hotelItem.price.currency);
  const beds = hotel.offers.map(hotelItem => hotelItem.room.typeEstimated.beds);
  const guests = hotel.offers.map(hotelItem => hotelItem.guests.adults);
  return (
    <Paper
      sx={{
        width: { xs: "60%", md: "80%" },
        boxShadow: "5px 5px 5px 5px black",
        borderRadius: "2rem",
        p: "6% 0 0 0",
        background: `${darkPurpleColor}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: { xs: "240px", md: "280px" },
          color: "white",
          background: "transparent",
          height: { xs: "340px", md: "280px" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mb={0.2}
        >
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "grey",
              mb: 0.5,
            }}
          >
            Hotel image sample*
          </Typography>

          <CardMedia
            component="img"
            sx={{
              width: "70%",
              borderRadius: "0.5rem",
              boxShadow: "1px 1px 1px 1px black",
            }}
            image={HotelImageSample}
            alt={hotel.hotel.name}
          />
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <CardContent
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
              <Typography variant="h5" mt={-2}>
                {" "}
                {hotel.hotel.name}
              </Typography>
              <Typography variant="h6" mt={-1}>
                Price per night: {hotelPrices} {currency}
              </Typography>
              <Box display="flex" flexDirection="row" alignItems="center" gap={4} flexWrap="nowrap">
                <Typography variant="h6" noWrap mt={-1}>
                  Beds: {beds}
                </Typography>

                <Typography variant="h6" noWrap mt={-1}>
                  Guests: {guests}
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <Button
            sx={{
              width: "65%",
              alignSelf: "center",
              mt: "-6%",
              color: "white",
              background: "transparent",
              boxShadow: "2px 2px 2px 2px black",
              "&:hover": {
                background: "transparent",
                color: "gold",
                boxShadow: "0.5px 0.5px 0.5px 0.5px black",
                fontWeight: "Bold",
              },
            }}
          >
            Book
          </Button>
        </Box>
      </Card>
    </Paper>
  );
};

export default CardTemplate;
