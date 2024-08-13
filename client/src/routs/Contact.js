import React from "react";
import Hero from "../components/hero/Hero";
import ContactImage from "../assets/images/contact-image.jpg";
import { FooterContact } from "../components/footers/FooterContact";
const Contact = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Hero, { buttonWrapperClassName: "disabled", cName: "hero-about", imageLink: ContactImage, text: "", title: "Contact" }),
        React.createElement(FooterContact, null)));
};
export default Contact;
