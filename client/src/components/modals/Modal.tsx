import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Box } from "@mui/material";
import { ModalProps } from "./types";
import CustomInput from "@custom-ui/CustomInputModal";
import { useSelector } from "react-redux";
import { loginModalSelector } from "@redux/selectors/authorization-selectors";

const CustomModal = ({
  modalTitle,
  textTitle,
  textReminder,
  handleClosing,
  handleOpening,
  inputs,
  handleChange,
}: ModalProps) => {
  const loginState = useSelector(loginModalSelector);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClosing();
    handleOpening();
  };

  return (
    <>
      <Dialog
        open={true}
        onClose={handleClosing}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle style={{ background: "black", color: "white" }}>
          {modalTitle}
        </DialogTitle>
        <DialogContent style={{ background: "black", color: "white" }}>
          <DialogContentText>{textTitle}</DialogContentText>
          {inputs.map((input) => (
            <CustomInput
              key={input.id}
              id={input.id}
              name={input.name}
              label={input.label}
              type={input.type}
              onChange={handleChange}
              value={input.value}
            />
          ))}
        </DialogContent>
        <DialogContentText
          ml={3}
          style={{ background: "black", color: "white" }}
        >
          {textReminder}
        </DialogContentText>
        <DialogActions
          style={{ background: "black", color: "white" }}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {loginState ? null : (
            <Button
              onClick={handleOpening}
              sx={{ alignSelf: "flex-start", color: "inherit" }}
            >
              Login
            </Button>
          )}
          <Box>
            <Button
              onClick={handleClosing}
              sx={{ alignSelf: "flex-end", color: "inherit" }}
            >
              Cancel
            </Button>
            <Button type="submit" sx={{ color: "inherit" }}>
              Submit
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomModal;
