import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { Box } from "@mui/material";
import { StyledTypography } from "@helpers/custom-elements";
import { messages, userToken } from "@helpers/constants";
import "./Footer.css";

const FooterServices = () => {
  const navigate = useNavigate();
  const handleTicketAccess = () => {
    const token = localStorage.getItem(userToken);
    if (!token) {
      toast.error(messages.NOT_AUTHORIZED);
    } else {
      navigate("/travel-plan");
    }
  };

  return (
    <Box
      padding={"4rem 6rem"}
      sx={{
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        textAlign: "center",
      }}
    >
      <ToastContainer />
      <StyledTypography
        variant="h3"
        onClick={handleTicketAccess}
        style={{
          textDecoration: "none",
          fontFamily: "Jua, sans-serif",
        }}
      >
        Flights
      </StyledTypography>
      <StyledTypography variant="h3">
        <Link to={"/hotels"} style={{ color: "inherit", textDecoration: "none" }}>
          {" "}
          Hotels
        </Link>
      </StyledTypography>
      <StyledTypography variant="h3">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          Car rentals
        </Link>
      </StyledTypography>

      <StyledTypography variant="h3">
        <Link to={"/#activities"} style={{ color: "inherit", textDecoration: "none" }}>
          Activities (tours, attractions)
        </Link>
      </StyledTypography>
    </Box>
  );
};

export { FooterServices };
