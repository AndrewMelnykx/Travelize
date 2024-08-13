import React from "react";
import { StyledTextField } from "@helpers/custom-elements";
const CustomInput = ({ id, name, label, type, onChange, value, }) => {
    return (React.createElement(StyledTextField, { autoFocus: true, required: true, margin: "dense", id: id, name: name, label: label, type: type, fullWidth: true, variant: "standard", onChange: onChange, value: value }));
};
export default CustomInput;
