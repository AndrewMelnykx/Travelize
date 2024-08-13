import React from "react";

import FujiyamaPictureOne from "@assets/images/images-for-home/fujiyama-img.jpg";
import FujiyamaPictureTwo from "@assets/images/images-for-home/fujiyama-second-img.jpg";
import ThailandOne from "@assets/images/images-for-home/thailand-one.jpg";
import ThailandTwo from "@assets/images/images-for-home/thailand-two.jpg";
import "./Destination.css";
import { Typography, Box, useMediaQuery } from "@mui/material";
import DestinationItem from "./DestinationTemplate";

const Destination = () => {
  const isSmallScreen = useMediaQuery("(max-width: 850px)");
  return (
    <Box margin={"4rem 6rem"}>
      <Box
        className="dest-title"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        mb={10}
      >
        <Typography variant="h3" mb={2} mt={2}>
          Popular destinations
        </Typography>
        <Typography variant="h4">
          Tours give you opportunity to see a lot, within a time frame
        </Typography>
      </Box>

      <Box
        className="first-dest"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={"4.5rem"}
      >
        <DestinationItem
          title="Fujiyama Volcano, Japan"
          description="Fujiyama, also known as Mount Fuji, stands at 3,776 meters, making
            it Japan's tallest peak. This iconic stratovolcano last erupted in
            1707-1708 and is renowned for its symmetrical cone. It's a UNESCO
            World Heritage Site, symbolizing Japan's natural beauty and cultural
            heritage. Climbers from around the world visit during the official
            climbing season, July to September. Additionally, Mount Fuji has
            inspired countless artworks and literary pieces, highlighting its
            significance in Japanese culture."
          imageOne={FujiyamaPictureOne}
          imageTwo={FujiyamaPictureTwo}
        />
      </Box>
      <Box
        className="second-dest"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={"4.5rem"}
        flexDirection={isSmallScreen ? "column-reverse" : "row-reverse"}
      >
        <DestinationItem
          title="Phuket,Thailand"
          imageOne={ThailandOne}
          imageTwo={ThailandTwo}
          description="Phuket, Thailand's largest island, offers stunning beaches, vibrant nightlife, and rich culture. Enjoy Patong Beach's lively atmosphere, explore the serene Big Buddha and Wat Chalong Temple, and dive into crystal-clear waters. Savor delicious Thai cuisine, shop at bustling markets, and experience exciting festivals, making Phuket a diverse and enchanting travel destination."
        />
      </Box>
    </Box>
  );
};

export { Destination };
