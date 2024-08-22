import React from "react";
import { MenuLinkItems } from "./NavBarData";
import { Link } from "react-router-dom";
import { Button, Typography, SvgIcon, Box, useMediaQuery } from "@mui/material";
import * as Icons from "@mui/icons-material";
import "./NavBar.css";
import { UseStoreDispatcher } from "@redux/store/store";
import AuthorizationSlice from "@redux/slices/authorization-slice";
import FilterSlice from "@redux/slices/filter-slice";

interface NavBarTypes {
  isNavBarVisible: boolean;
}

const NavBar: React.FC<NavBarTypes> = ({ isNavBarVisible }) => {
  const isScreenSmall = useMediaQuery("(max-width:850px)");
  const dispatch = UseStoreDispatcher();

  const handleSignUpModalVisibility = () => {
    dispatch(AuthorizationSlice.actions.toggleSignUp(true));
  };
  const handleRouteChanging = () => {
    dispatch(FilterSlice.actions.handleCloseIconVisibility(false));
  };

  return (
    <Box data-testid="nav-bar">
      <ul className={isNavBarVisible ? "nav-menu-mobile" : "nav-menu"}>
        {MenuLinkItems.map((item, index) => {
          const IconComponent = Icons[item.icon];
          return (
            <li key={index} className={item.cName}>
              <Link
                to={item.url}
                className="router-nav-link"
                onClick={handleRouteChanging}
              >
                <Box display={"flex"}>
                  {IconComponent && (
                    <SvgIcon
                      className="nav-icons"
                      component={IconComponent}
                      sx={{ marginRight: "10px", marginTop: "5px" }}
                    />
                  )}
                  <Typography variant="h5">{item.title}</Typography>
                </Box>
              </Link>
            </li>
          );
        })}
        <Button
          className="nav-button"
          onClick={handleSignUpModalVisibility}
          sx={{
            fontSize: "20px",
            color: "black",
            backgroundColor: "whitesmoke",
            display: "flex",
            justifySelf: "flex-start",
            marginLeft: isScreenSmall ? "0%" : "20px",
            "&:hover": {
              backgroundColor: "rgb(0, 255, 127)",
              color: "white",
            },
          }}
        >
          Sign Up
        </Button>
      </ul>
    </Box>
  );
};
export { NavBar };
