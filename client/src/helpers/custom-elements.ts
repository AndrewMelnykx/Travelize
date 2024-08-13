import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./custom-elements.css";

const StyledTextField = styled(TextField)(() => ({
  width: "100%",
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiFormLabel-root": {
    color: "white",
    fontSize: "20px",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottom: "1px solid white",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "2px solid white",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottom: "1 px solid white",
  },
  "& .MuiInputLabel-shrink": {
    color: "white",
    transition: "0.3s ease-in-out",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
}));
const StyledTypography = styled(Typography)(() => ({
  color: "white",
  cursor: "pointer",

  "&:hover": {
    width: "100%",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
  },
}));

export { StyledTextField, StyledTypography };
