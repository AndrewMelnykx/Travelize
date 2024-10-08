import React from "react";
import { Box } from "@mui/material";
import { StyledTypography } from "@helpers/custom-elements";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";

const FooterServices = () => {
  const navigate = useNavigate();
  const handleTicketAccess = () => {
    const token = Cookies.get("userToken");
    if (!token) {
      toast.error("You need a token for this page.Please login or sign up !");
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
        <Link
          to={"/hotels"}
          style={{ color: "inherit", textDecoration: "none" }}
        >
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
        <Link
          to={"/#activities"}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Activities (tours, attractions)
        </Link>
      </StyledTypography>
    </Box>
  );
};

export { FooterServices };
