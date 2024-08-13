import React, { useState, ChangeEvent } from "react";
import {
  Paper,
  Box,
  Typography,
  SvgIcon,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavBar } from "@custom-ui/nav-bar/NavBar";
import "./Header.css";
import CustomModal from "@modals/Modal";
import { useSelector } from "react-redux";
import {
  signUpModalSelector,
  loginModalSelector,
} from "@redux/selectors/authorization-selectors";
import { UseStoreDispatcher } from "@redux/store/store";
import AuthorizationSlice from "@redux/slices/authorization-slice";
import {
  signUpInputs,
  loginInputs,
  tokenInputId,
} from "@data/static-data/inputs-data";
import { setCookieFromTokenInput } from "@helpers/helpers-funcs";

const Header = () => {
  const [isCloseIconVisible, setIsCloseIconVisible] = useState(false);
  const [inputsSignUp, setInputsSignUp] = useState(signUpInputs);
  const [inputsLogin, setInputsLogin] = useState(loginInputs);

  const handleIsCloseVisibility = () => {
    setIsCloseIconVisible(!isCloseIconVisible);
  };
  const isScreenSmall = useMediaQuery("(max-width:850px)");
  const signUpState = useSelector(signUpModalSelector);
  const loginState = useSelector(loginModalSelector);
  const dispatch = UseStoreDispatcher();

  const handleCloseSignUp = () => {
    dispatch(AuthorizationSlice.actions.toggleSignUp(false));
  };
  const handleLoginOpening = () => {
    dispatch(AuthorizationSlice.actions.toggleLogin(true));
  };
  const handleLoginClosing = () => {
    dispatch(AuthorizationSlice.actions.toggleLogin(false));
  };

  const handleSignUpInputsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInputsSignUp((initialInputs) =>
      initialInputs.map((input) =>
        input.id === id ? { ...input, value: value } : input
      )
    );
  };
  const handleLoginInputsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setCookieFromTokenInput(id, tokenInputId, value);

    setInputsLogin((initialInputs) =>
      initialInputs.map((input) =>
        input.id === id ? { ...input, value: value } : input
      )
    );
  };

  return (
    <Box height={"100px"} position={"fixed"} width={"100%"}>
      <Paper
        className="header-paper"
        sx={{
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Typography variant="h3" ml={3} mt={1} className="header-typography">
          Travelize
        </Typography>

        {isScreenSmall ? (
          <IconButton
            onClick={handleIsCloseVisibility}
            style={{
              position: "absolute",
              right: "0",
            }}
          >
            <SvgIcon component={isCloseIconVisible ? CloseIcon : MenuIcon} />
          </IconButton>
        ) : null}
        <NavBar isNavBarVisible={isCloseIconVisible} />
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
