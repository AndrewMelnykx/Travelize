import Hero from "../components/hero";
import AboutImage from "@assets/images/about-image.avif";
import { FooterAbout } from "@footers/FooterAbout";
import React from "react";

const About = () => {
  return (
    <>
      <Hero
        buttonWrapperClassName="disabled"
        cName="hero-about"
        imageLink={AboutImage}
        text=""
        title=" About us"
      />
      <FooterAbout />
    </>
  );
};

export default About;
