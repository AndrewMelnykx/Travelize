import React from "react";
import { CustomInputProps } from "@modals/types";
import { StyledTextField } from "@helpers/custom-elements";
import { darkPurpleColor } from "@helpers/constants";

const CustomInput = ({ id, name, label, type, onChange, value }: CustomInputProps) => {
  return (
    <StyledTextField
      autoFocus
      required
      margin="dense"
      id={id}
      name={name}
      label={label}
      type={type}
      fullWidth
      variant="standard"
      onChange={onChange}
      value={value}
      sx={{
        backgroundColor: darkPurpleColor,
        "& .MuiInputBase-root": {
          color: "white",
          "& input": { color: "white" },
          "&:before": { borderBottom: "1px solid gold" },
          "&:hover:not(.Mui-disabled):before": { borderBottom: "2px solid gold" },
          "&.Mui-focused:after": { borderBottom: "2px solid gold" },
        },
        "& .MuiInputLabel-root": {
          color: "white",
          "&.Mui-focused": { color: "white" },
        },
      }}
    />
  );
};

export default CustomInput;
