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
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainPage />
          <Routes>
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="/#activities" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="travel-plan" element={<TravelPlan />} />
            <Route path="/hotels" element={<HotelCards />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </>
  );
}
export default App;
