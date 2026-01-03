import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { Box } from "@mui/material";
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
      className="footer-container"
      padding="4rem 6rem"
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
      <ul className="services-list"></ul>
      <ul className="services-list">
        <li onClick={handleTicketAccess}>
          <Link to="/" onClick={e => e.preventDefault()}>
            Flights
          </Link>
        </li>

        <li>
          <Link to="/hotels">Hotels</Link>
        </li>

        <li>
          <Link to="/">Car rentals</Link>
        </li>

        <li>
          <Link to="/#activities">Activities </Link>
        </li>
      </ul>
    </Box>
  );
};

export { FooterServices };
