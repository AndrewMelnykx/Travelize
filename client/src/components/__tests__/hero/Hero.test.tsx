import Hero from "../../hero/Hero";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Hero", () => {
  const defaultProps = {
    imageLink: "justLink",
    title: "justTitle",
    text: "justText",
    cName: "justCName",
    buttonWrapperClassName: "justButtonWrapperClassName",
  };
  it("Renders Hero with correct content", () => {
    render(
      <BrowserRouter>
        <Hero {...defaultProps} />
      </BrowserRouter>
    );

    expect(screen.getByText(/justTitle/i)).toBeInTheDocument();
    expect(screen.getByText(/justText/i)).toBeInTheDocument();
    const heroContainer = screen.getByTestId("hero-container");
    const buttonWrapper = screen.getByTestId("button-wrapper");

    expect(heroContainer).toHaveStyle(
      `background-image: url(${defaultProps.imageLink})`
    );
    expect(heroContainer).toHaveClass(defaultProps.cName);
    expect(buttonWrapper).toHaveClass(defaultProps.buttonWrapperClassName);
  });
});
