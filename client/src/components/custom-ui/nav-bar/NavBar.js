import React from "react";
import { MenuLinkItems } from "./NavBarData";
import { Link } from "react-router-dom";
import { Button, Typography, SvgIcon, Box, useMediaQuery } from "@mui/material";
import * as Icons from "@mui/icons-material";
import "./NavBar.css";
import { UseStoreDispatcher } from "@redux/store/store";
import AuthorizationSlice from "@redux/slices/authorization-slice";
const NavBar = ({ isNavBarVisible }) => {
    const isScreenSmall = useMediaQuery("(max-width:850px)");
    const dispatch = UseStoreDispatcher();
    const handleSignUpModalVisibility = () => {
        dispatch(AuthorizationSlice.actions.toggleSignUp(true));
    };
    return (React.createElement(Box, null,
        React.createElement("ul", { className: isNavBarVisible ? "nav-menu-mobile" : "nav-menu" },
            MenuLinkItems.map((item, index) => {
                const IconComponent = Icons[item.icon];
                return (React.createElement("li", { key: index, className: item.cName },
                    React.createElement(Link, { to: item.url, className: "router-nav-link" },
                        React.createElement(Box, { display: "flex" },
                            IconComponent && (React.createElement(SvgIcon, { className: "nav-icons", component: IconComponent, sx: { marginRight: "10px", marginTop: "5px" } })),
                            React.createElement(Typography, { variant: "h5" }, item.title)))));
            }),
            React.createElement(Button, { className: "nav-button", onClick: handleSignUpModalVisibility, sx: {
                    fontSize: "20px",
                    color: "black",
                    backgroundColor: "whitesmoke",
                    display: "flex",
                    justifySelf: "flex-start",
                    marginLeft: isScreenSmall ? "-15%" : "20px",
                    "&:hover": {
                        backgroundColor: "rgb(0, 255, 127)",
                        color: "white",
                    },
                } }, "Sign Up"))));
};
export { NavBar };
