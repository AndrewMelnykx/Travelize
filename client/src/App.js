import React from "react";
import "./App.css";
import "./index.css";
import MainPage from "./components/main-page/MainPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./helpers/font-theme";
import { Routes, Route } from "react-router-dom";
import Home from "@routs/Home";
import Service from "@routs/Service";
import About from "@routs/About";
import TravelPlan from "@routs/TravelPlan/pages/TravelPlan";
import Contact from "@routs/Contact";
import { Provider } from "react-redux";
import store from "@redux/store/store";
import HotelCards from "@routs/HotelCards/HotelCards";
import TicketsPage from "@routs/TravelPlan/pages/TicketsPage";
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Provider, { store: store },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(MainPage, null),
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "tickets", element: React.createElement(TicketsPage, null) }),
                    React.createElement(Route, { path: "/#activities", element: React.createElement(Home, null) }),
                    React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                    React.createElement(Route, { path: "/service", element: React.createElement(Service, null) }),
                    React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                    React.createElement(Route, { path: "/contact", element: React.createElement(Contact, null) }),
                    React.createElement(Route, { path: "travel-plan", element: React.createElement(TravelPlan, null) }),
                    React.createElement(Route, { path: "/hotels", element: React.createElement(HotelCards, null) }))))));
}
export default App;
