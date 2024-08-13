import React from "react";
import { Box, Typography } from "@mui/material";

const FooterAbout = () => {
  return (
    <Box
      padding={"4rem 6rem"}
      sx={{
        background: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Trevelize is a seasoned tour company specializing in crafting
        unforgettable travel experiences worldwide. With 15 years of expertise,
        Trevelize has been curating diverse and enriching tours, offering
        travelers a unique opportunity to explore cultures, landmarks, and
        hidden gems across the globe. Whether it's a cultural immersion,
        adventure trip, or relaxing getaway, Trevelize ensures a memorable
        journey with professional guidance and personalized service.
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
      >
        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            Personalized Tours:
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.2rem", fontWeight: "normal" }}
          >
            Tailored experiences for every traveler.
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            Eco-Friendly:
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.2rem", fontWeight: "normal" }}
          >
            Sustainable travel practices always.
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            Local Support:
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.2rem", fontWeight: "normal" }}
          >
            Boosting local communities and economies.
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            Cultural Exchange:
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.2rem", fontWeight: "normal" }}
          >
            Immersive, authentic experiences worldwide.
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold">
            Quality Service:
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "1.2rem", fontWeight: "normal" }}
          >
            Exceptional service for memorable journeys.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { FooterAbout };
