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
    return (React.createElement(Box, { padding: "4rem 6rem", sx: {
            background: `${isSmallScreen ? "black" : "black"}`,
            color: "white",
        } },
        React.createElement(Box, { className: "top", display: "flex", alignItems: "center", textAlign: "start", justifyContent: "space-between", flexWrap: "wrap" },
            React.createElement(Box, { display: "flex", flexDirection: "column" },
                React.createElement(Typography, { variant: "h6" }, "Travelize"),
                React.createElement(Typography, { variant: "subtitle1" }, "Choose your best trip!")),
            React.createElement(Box, null,
                React.createElement(Link, { to: "/" },
                    React.createElement(IconButton, { sx: { color: "white" } },
                        React.createElement(FacebookIcon, { sx: { color: "white" } }))),
                React.createElement(Link, { to: "/" },
                    React.createElement(IconButton, { sx: { color: "white" } },
                        React.createElement(InstagramIcon, { sx: { color: "white" } }))),
                React.createElement(Link, { to: "/" },
                    React.createElement(IconButton, { sx: { color: "white" } },
                        React.createElement(TwitterIcon, { sx: { color: "white" } }))),
                React.createElement(Link, { to: "/" },
                    React.createElement(IconButton, { sx: { color: "white" } },
                        React.createElement(LinkedInIcon, { sx: { color: "white" } }))))),
        React.createElement(Box, { className: "bottom", display: "flex", justifyContent: "space-between", columnGap: "20px", flexDirection: `${isSmallScreen ? "column" : "row"}`, mt: `${isSmallScreen ? "5%" : "0%"}` },
            React.createElement(Box, { mt: `${isSmallScreen ? "5%" : "0%"}` },
                React.createElement(Typography, { variant: "h4" }, "Project"),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "Status")),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "License")),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "ChangeLog")),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "All Versions"))),
            React.createElement(Box, { mt: `${isSmallScreen ? "5%" : "0%"}` },
                React.createElement(Typography, { variant: "h4" }, "Community"),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "GitHub")),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "Issues")),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "Project")),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "Twitter"))),
            React.createElement(Box, { mt: `${isSmallScreen ? "5%" : "0%"}` },
                React.createElement(Typography, { variant: "h4" }, "Help"),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "Support")),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "Troubleshooting")),
                React.createElement(Link, { to: "/", style: { textDecoration: "none" } },
                    React.createElement(Typography, { variant: "h4", sx: linkStyle, component: "span" }, "Contact us"))))));
};
export { FooterHome };
