import React from "react";
import { CustomInputProps } from "@modals/types";
import { StyledTextField } from "@helpers/custom-elements";

const CustomInput = ({
  id,
  name,
  label,
  type,
  onChange,
  value,
}: CustomInputProps) => {
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
    />
  );
};

export default CustomInput;
