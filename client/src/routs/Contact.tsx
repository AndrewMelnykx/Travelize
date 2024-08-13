import React from "react";
import Hero from "../components/hero/Hero";
import ContactImage from "../assets/images/contact-image.jpg";
import { FooterContact } from "../components/footers/FooterContact";

const Contact = () => {
  return (
    <>
      <Hero
        buttonWrapperClassName="disabled"
        cName="hero-about"
        imageLink={ContactImage}
        text=""
        title="Contact"
      />
      <FooterContact />
    </>
  );
};

export default Contact;
