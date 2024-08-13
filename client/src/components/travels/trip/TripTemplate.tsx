import React from "react";
import { FC } from "react";
import {
  Box,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { TripCardProps } from "./types";

const TripCard: FC<TripCardProps> = ({ image, title, text }) => {
  return (
    <Box padding={2} height="100%">
      <Paper
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          {" "}
          <CardMedia
            component={"img"}
            image={image}
            width={"100%"}
            height={"400px"}
            sx={{
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.4s ease-in-out",
              "&:hover": {
                transform: "scale(1.3)",
                borderRadius: "10px",
              },
            }}
          ></CardMedia>
          <CardContent
            sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h4" textAlign="center">
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                alignSelf: "flex-start",
                marginTop: 2,
                overflowWrap: "break-word",
              }}
            >
              {text}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export { TripCard };
