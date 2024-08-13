import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import CustomInput from "@custom-ui/CustomInputModal";
import { useSelector } from "react-redux";
import { loginModalSelector } from "@redux/selectors/authorization-selectors";
const CustomModal = ({ modalTitle, textTitle, textReminder, handleClosing, handleOpening, inputs, handleChange, }) => {
    const loginState = useSelector(loginModalSelector);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email;
        console.log(email);
        handleClosing();
        handleOpening();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Dialog, { open: true, onClose: handleClosing, PaperProps: {
                component: "form",
                onSubmit: handleSubmit,
            } },
            React.createElement(DialogTitle, { style: { background: "black", color: "white" } }, modalTitle),
            React.createElement(DialogContent, { style: { background: "black", color: "white" } },
                React.createElement(DialogContentText, null, textTitle),
                inputs.map((input) => (React.createElement(CustomInput, { key: input.id, id: input.id, name: input.name, label: input.label, type: input.type, onChange: handleChange, value: input.value })))),
            React.createElement(DialogContentText, { ml: 3, style: { background: "black", color: "white" } }, textReminder),
            React.createElement(DialogActions, { style: { background: "black", color: "white" }, sx: { display: "flex", justifyContent: "space-between" } },
                loginState ? null : (React.createElement(Button, { onClick: handleOpening, sx: { alignSelf: "flex-start", color: "inherit" } }, "Login")),
                React.createElement(Box, null,
                    React.createElement(Button, { onClick: handleClosing, sx: { alignSelf: "flex-end", color: "inherit" } }, "Cancel"),
                    React.createElement(Button, { type: "submit", sx: { color: "inherit" } }, "Submit"))))));
};
export default CustomModal;
