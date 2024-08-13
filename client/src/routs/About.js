import Hero from "../components/hero/Hero";
import AboutImage from "../assets/images/about-image.jpg";
import { FooterAbout } from "../components/footers/FooterAbout";
import React from "react";
const About = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Hero, { buttonWrapperClassName: "disabled", cName: "hero-about", imageLink: AboutImage, text: "", title: " About us" }),
        React.createElement(FooterAbout, null)));
};
export default About;
