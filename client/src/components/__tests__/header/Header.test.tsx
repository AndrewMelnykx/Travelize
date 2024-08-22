import { Header } from "@header/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { MenuLinkItems } from "@custom-ui/nav-bar/NavBarData";
import { NavBar } from "@custom-ui/nav-bar/NavBar";

const mockStore = configureMockStore();
const store = mockStore({
  authorization: {
    isLoginVisible: false,
    isSignUpVisible: false,
  },
});

describe("Header", () => {
  it("Renders header with correct content", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    expect(screen.getByText(/Travelize/i)).toBeInTheDocument();
  });

  it("Renders appropriate icons based on menu items", () => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar isNavBarVisible={true} />
        </Router>
      </Provider>
    );

    MenuLinkItems.forEach((item) => {
      const iconElement = screen.getByTestId(item.dataTestId + "Icon");
      expect(iconElement).toBeInTheDocument();
    });
  });
  it("Correct nav-bar uploading", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
  });
  it("Renders login modal when loginState is true", () => {
    const customStore = mockStore({
      authorization: {
        isLoginVisible: true,
        isSignUpVisible: false,
      },
    });
    render(
      <Provider store={customStore}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Authorization/i)).toBeInTheDocument();
  });

  it("Renders sign-up modal when signUpState is true", () => {
    const customStore = mockStore({
      authorization: {
        isLoginVisible: false,
        isSignUpVisible: true,
      },
    });
    render(
      <Provider store={customStore}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Filling out sign up form/i)).toBeInTheDocument();
  });
});
