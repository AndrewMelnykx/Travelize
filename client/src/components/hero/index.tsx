import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UseStoreDispatcher } from "@store/index";
import { toggleSignUp } from "@store/slices/authorization-slice";

import { Box, Typography, Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

import { debounceDispatch } from "@helpers/helpers-funcs";
import { DEBOUNCE_HERO_DELAY_MS, messages, userToken } from "@helpers/constants";

import "./index.css";

interface HeroProps {
  imageLink: string;
  title: string;
  text: string;
  cName: string;
  buttonWrapperClassName: string;
}

const Hero: React.FC<HeroProps> = ({ imageLink, title, text, cName, buttonWrapperClassName }) => {
  const navigate = useNavigate();
  const dispatch = UseStoreDispatcher();
  const debouncedDispatch = useRef(debounceDispatch(dispatch, DEBOUNCE_HERO_DELAY_MS)).current;

  const handleIfNotAuthorized = () => {
    const token = localStorage.getItem(userToken);

    if (!token) {
      debouncedDispatch(toggleSignUp(true));
      toast.error(messages.NOT_AUTHORIZED + token);
    } else {
      toast.success(messages.LOGIN_SUCCESS);
      navigate("/travel-plan");
    }
  };

  const handleTicketAccess = () => {
    handleIfNotAuthorized();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      className={cName}
      position="relative"
      zIndex={-1}
      sx={{
        backgroundImage: `url(${imageLink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-testid="hero-container"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={1}
        textAlign="center"
        color="white"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
      >
        <Typography variant="h1" mb={2} className="hero-title">
          {title}
        </Typography>
        <Typography variant="h4" mt={2} mb={0} className="hero-text">
          {text}
        </Typography>

        <Box mt={2} className={buttonWrapperClassName} data-testid="button-wrapper">
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleTicketAccess}
            sx={{
              background: "white",
              zIndex: "1",
              color: "black",
              "&:hover": {
                transition: "0.3s ease-in-out",
                backgroundColor: "rgb(0, 255, 127)",
                color: "white",
              },
            }}
          >
            Travel plan
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Hero;
