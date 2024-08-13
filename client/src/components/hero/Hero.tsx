import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import "./Hero.css";

interface HeroProps {
  imageLink: string;
  title: string;
  text: string;
  cName: string;
  buttonWrapperClassName: string;
}

const Hero: React.FC<HeroProps> = ({
  imageLink,
  title,
  text,
  cName,
  buttonWrapperClassName,
}) => {
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

        <Box mt={2} className={buttonWrapperClassName}>
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
            {" "}
            Travel plan
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Hero;
