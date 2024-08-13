import React from "react";
import Hero from "../components/hero/Hero";
import ServiceImage from "../assets/images/service-image.jpg";
import { FooterServices } from "../components/footers/FooterServices";
const Service = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Hero, { buttonWrapperClassName: "disabled", cName: "hero-about", imageLink: ServiceImage, text: "", title: "Service" }),
        React.createElement(FooterServices, null)));
};
export default Service;
