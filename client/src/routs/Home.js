import React, { useLayoutEffect, useRef } from "react";
import Hero from "../components/hero/Hero";
import HomeImage from "../assets/images/home-image.jpg";
import { Destination } from "../components/travels/destination/Destination";
import TripCards from "../components/travels/trip/Trip";
import { FooterHome } from "../components/footers/FooterHome";
const Home = () => {
    const bottomSectionRef = useRef(null);
    useLayoutEffect(() => {
        const { hash } = window.location;
        if (hash === "#activities" && bottomSectionRef.current) {
            window.scrollTo({
                top: bottomSectionRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Hero, { buttonWrapperClassName: "visible", cName: "hero-template", imageLink: HomeImage, text: "Choose your next destination", title: "Your journey starts here" }),
        React.createElement(Destination, null),
        React.createElement(TripCards, { ref: bottomSectionRef }),
        React.createElement(FooterHome, null)));
};
export default Home;
