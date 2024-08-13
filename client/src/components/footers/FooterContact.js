import React from "react";
import { Box, Typography } from "@mui/material";
import { StyledTextField } from "../../helpers/custom-elements";
const FooterContact = () => {
    return (React.createElement(Box, { padding: "4rem 6rem", sx: { background: "black", color: "white" } },
        React.createElement(Box, { className: "top", display: "flex", alignItems: "center", textAlign: "start", justifyContent: "center", flexWrap: "wrap" },
            React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column" },
                React.createElement(Typography, { variant: "h3" }, "Dear customers, in order to contact us please fill out this form"),
                React.createElement(Box, { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "50%" },
                    React.createElement(StyledTextField, { variant: "standard", label: "Login", sx: { margin: "2%" } }),
                    React.createElement(StyledTextField, { variant: "standard", label: "Password" }))))));
};
export { FooterContact };
