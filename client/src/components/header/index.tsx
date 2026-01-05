import React, { useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";

import { signUpModalSelector, loginModalSelector } from "@store/selectors/authorization-selectors";
import { UseStoreDispatcher } from "@store/index";

import { isCloseIconSelector } from "@store/selectors/components-selectors";
import FilterSlice from "@store/slices/filter-slice";
import AuthorizationSlice from "@store/slices/authorization-slice";

import { Paper, Box, Typography, SvgIcon, IconButton, useMediaQuery, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavBar } from "@custom-ui/nav-bar";
import CustomModal from "@modals/index";
import { CustomInputProps } from "@modals/types";
import { signUpInputs, loginInputs, tokenInputId } from "@helpers/cards-constants";
import { setTokenInLocalStorage } from "@helpers/helpers-funcs";

import "./index.css";

const Header = () => {
  const closeIconVisibility = useSelector(isCloseIconSelector);
  const [inputsSignUp, setInputsSignUp] = useState<CustomInputProps[]>(signUpInputs);
  const [inputsLogin, setInputsLogin] = useState<CustomInputProps[]>(loginInputs);

  const isScreenSmall = useMediaQuery("(max-width:850px)");
  const signUpState = useSelector(signUpModalSelector);
  const loginState = useSelector(loginModalSelector);
  const dispatch = UseStoreDispatcher();

  const handleIsCloseVisibility = () => {
    dispatch(FilterSlice.actions.handleCloseIconVisibility(!closeIconVisibility));
  };

  const handleCloseSignUp = () => {
    dispatch(AuthorizationSlice.actions.toggleSignUp(false));
    setInputsSignUp(signUpInputs);
  };
  const handleLoginOpening = () => {
    setInputsLogin(loginInputs);
    dispatch(AuthorizationSlice.actions.toggleLogin(true));
  };
  const handleLoginClosing = () => {
    dispatch(AuthorizationSlice.actions.toggleLogin(false));
    dispatch(AuthorizationSlice.actions.toggleSignUp(false));
  };

  const handleSignUpInputsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInputsSignUp(initialInputs =>
      initialInputs.map(input => (input.id === id ? { ...input, value: value } : input)),
    );
    setTokenInLocalStorage(id, tokenInputId, value);
  };
  const handleLoginInputsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setTokenInLocalStorage(id, tokenInputId, value);

    setInputsLogin(initialInputs =>
      initialInputs.map(input => (input.id === id ? { ...input, value: value } : input)),
    );
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box height={"100px"} position={"fixed"} width={"100%"} zIndex={10}>
      <Paper
        className="header-paper"
        sx={{
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Button
          disableRipple
          disableElevation
          sx={{
            all: "unset",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: "3rem",
            ml: 3,
            mt: 1,
            color: "inherit",
            "&:hover": {
              background: "transparent",
            },
          }}
          onClick={scrollToTop}
        >
          Travelize
        </Button>
        {isScreenSmall ? (
          <IconButton
            onClick={handleIsCloseVisibility}
            style={{
              position: "absolute",
              right: "0",
            }}
            data-testid=""
          >
            <SvgIcon component={closeIconVisibility ? CloseIcon : MenuIcon} />
          </IconButton>
        ) : null}
        <NavBar isNavBarVisible={closeIconVisibility} />
        {loginState ? (
          <CustomModal
            handleChange={handleLoginInputsChange}
            inputs={inputsLogin}
            handleClosing={handleLoginClosing}
            handleOpening={() => {}}
            textTitle="For further proceeding write your token below "
            modalTitle="Authorization"
            textReminder=""
          />
        ) : (
          signUpState && (
            <CustomModal
              handleChange={handleSignUpInputsChange}
              inputs={inputsSignUp}
              textTitle=" To make an order, please write your email, we sent you registration
              token"
              modalTitle=" Filling out sign up form"
              textReminder=""
              handleClosing={handleCloseSignUp}
              handleOpening={handleLoginOpening}
            />
          )
        )}
      </Paper>
    </Box>
  );
};
export { Header };
