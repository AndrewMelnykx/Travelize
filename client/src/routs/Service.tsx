import React from "react";
import Hero from "../components/hero/Hero";
import ServiceImage from "../assets/images/service-image.jpg";
import { FooterServices } from "../components/footers/FooterServices";

const Service = () => {
  return (
    <>
      <Hero
        buttonWrapperClassName="disabled"
        cName="hero-about"
        imageLink={ServiceImage}
        text=""
        title="Service"
      />
      <FooterServices />
    </>
  );
};

export default Service;
