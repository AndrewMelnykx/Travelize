import Hero from "../components/hero/Hero";
import AboutImage from "../assets/images/about-image.jpg";
import { FooterAbout } from "../components/footers/FooterAbout";
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
