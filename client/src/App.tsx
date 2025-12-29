import { Provider } from "react-redux";
import store from "@redux/store/store";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { theme } from "./helpers/font-theme";

import Home from "@routes/Home";
import Service from "@routes/Service";
import About from "@routes/About";
import TravelPlan from "@routes/TravelPlan/pages/TravelPlan";
import Contact from "@routes/Contact";
import HotelCards from "@routes/HotelCards/HotelCards";
import TicketsPage from "@routes/TravelPlan/pages/TicketsPage";

import { Header } from "@header/index";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
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
          <ToastContainer />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
