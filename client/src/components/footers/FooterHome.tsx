import React from "react";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { linkStyle } from "@custom-ui/const";
import "./Footer.css";

const FooterHome = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  return (
    <Box
      padding={"4rem 6rem"}
      sx={{
        background: `${isSmallScreen ? "black" : "black"}`,
        color: "white",
      }}
    >
      <Box
        className="top"
        display={"flex"}
        alignItems={"center"}
        textAlign={"start"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h6">Travelize</Typography>
          <Typography variant="subtitle1">Choose your best trip!</Typography>
        </Box>

        <Box>
          <Link to={"/"}>
            <IconButton sx={{ color: "white" }}>
              <FacebookIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <Link to={"/"}>
            <IconButton sx={{ color: "white" }}>
              <InstagramIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <Link to={"/"}>
            <IconButton sx={{ color: "white" }}>
              <TwitterIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <Link to={"/"}>
            <IconButton sx={{ color: "white" }}>
              <LinkedInIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <Box
        className="bottom"
        display={"flex"}
        justifyContent={"space-between"}
        columnGap={"20px"}
        flexDirection={`${isSmallScreen ? "column" : "row"}`}
        mt={`${isSmallScreen ? "5%" : "0%"}`}
      >
        <Box mt={`${isSmallScreen ? "5%" : "0%"}`}>
          <Typography variant="h4">Project</Typography>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              Status
            </Typography>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              License
            </Typography>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              ChangeLog
            </Typography>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              All Versions
            </Typography>
          </Link>
        </Box>
        <Box mt={`${isSmallScreen ? "5%" : "0%"}`}>
          <Typography variant="h4">Community</Typography>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              GitHub
            </Typography>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              Issues
            </Typography>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              Project
            </Typography>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              Twitter
            </Typography>
          </Link>
        </Box>
        <Box mt={`${isSmallScreen ? "5%" : "0%"}`}>
          <Typography variant="h4">Help</Typography>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              Support
            </Typography>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              Troubleshooting
            </Typography>
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h4" sx={linkStyle} component="span">
              Contact us
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export { FooterHome };
