import React, { forwardRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { TripCard } from "./TripTemplate";
import { cardsData } from "@data/static-data/cards-data";

const TripCards = forwardRef<HTMLDivElement>((props, ref) => {
  const isSmallScreen = useMediaQuery("(max-width: 850px)");

  return (
    <Box ref={ref} id="activities">
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        mb={4}
      >
        <Typography variant="h2" mt={5}>
          Recent Trips
        </Typography>
        <Typography variant="h4">
          You can discover new destinations within Google Maps
        </Typography>
      </Box>

      <Box
        display={"flex"}
        sx={{
          flexDirection: isSmallScreen ? "column" : "row",
          marginBottom: isSmallScreen ? "10%" : "0%",
        }}
      >
        {cardsData.map((card) => (
          <TripCard
            title={card.title}
            text={card.text}
            image={card.image}
            key={card.id}
          />
        ))}
      </Box>
    </Box>
  );
});

export default TripCards;
