import React from "react";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Box, Typography } from "@mui/material";
import "./Destination.css";
const DestinationItem = ({ title, description, imageOne, imageTwo, }) => {
    const [inView, setInView] = useState(false);
    const titleRef = useRef(null);
    const topImageProps = useSpring({
        from: { transform: "translateY(-100%)", opacity: 0 },
        to: {
            transform: inView ? "translateY(0%)" : "translateY(-100%)",
            opacity: inView ? 1 : 0,
        },
        config: { duration: 200, tension: 500 },
    });
    const bottomImageProps = useSpring({
        from: { transform: "translateY(100%)", opacity: 0 },
        to: {
            transform: inView ? "translateY(0%)" : "translateY(100%)",
            opacity: inView ? 1 : 0,
        },
        config: { duration: 200, tension: 500 },
    });
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { className: "dest-text" },
            React.createElement(Typography, { variant: "h4", ref: titleRef, mb: 5, padding: 0 }, title),
            React.createElement(Typography, { variant: "h6", maxWidth: "500px", className: "dest-description" }, description)),
        React.createElement(Box, { className: "dest-images", flexBasis: "50%", display: "flex", style: { position: "relative" } },
            React.createElement(animated.div, { style: {
                    ...topImageProps,
                    width: "48%",
                    zIndex: -2,
                } },
                React.createElement("img", { alt: title, src: imageOne, style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "6px",
                        zIndex: -2,
                    } })),
            React.createElement(animated.div, { style: {
                    ...bottomImageProps,
                    width: "48%",
                    marginLeft: "8px",
                    zIndex: -2,
                } },
                React.createElement("img", { alt: title, src: imageTwo, style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "6px",
                        marginTop: "20%",
                        zIndex: -2,
                    } })))));
};
export default DestinationItem;
