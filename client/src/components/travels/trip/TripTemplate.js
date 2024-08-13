import React from "react";
import { Box, Paper, Card, CardMedia, CardContent, Typography, } from "@mui/material";
const TripCard = ({ image, title, text }) => {
    return (React.createElement(Box, { padding: 2, height: "100%" },
        React.createElement(Paper, { sx: {
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            } },
            React.createElement(Card, { sx: { display: "flex", flexDirection: "column", flexGrow: 1 } },
                " ",
                React.createElement(CardMedia, { component: "img", image: image, width: "100%", height: "400px", sx: {
                        borderRadius: "10px",
                        cursor: "pointer",
                        transition: "0.4s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.3)",
                            borderRadius: "10px",
                        },
                    } }),
                React.createElement(CardContent, { sx: { flexGrow: 1, display: "flex", flexDirection: "column" } },
                    React.createElement(Typography, { variant: "h4", textAlign: "center" }, title),
                    React.createElement(Typography, { variant: "h5", sx: {
                            alignSelf: "flex-start",
                            marginTop: 2,
                            overflowWrap: "break-word",
                        } }, text))))));
};
export { TripCard };
