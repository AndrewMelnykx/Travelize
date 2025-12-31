import React from "react";
import Hero from "../components/hero";
import ContactImage from "@assets/images/contact-image.avif";
import { FooterContact } from "@footers/FooterContact";

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
