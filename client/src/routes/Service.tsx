import React from "react";
import Hero from "../components/hero";
import ServiceImage from "@assets/images/service-image.avif";
import { FooterServices } from "@footers/FooterServices";

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
