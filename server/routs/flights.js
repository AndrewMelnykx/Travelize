import express from "express";
import Amadeus from "amadeus";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const routerFlight = express.Router();

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

routerFlight.get("/", async (req, res) => {
  const {
    originLocationCode,
    destinationLocationCode,
    departureDate,
    returnDate,
    adults,
  } = req.query;

  try {
    const cityResponseOrigin = await amadeus.referenceData.locations.get({
      keyword: originLocationCode,
      subType: Amadeus.location.any,
    });

    const cityResponseDestination = await amadeus.referenceData.locations.get({
      keyword: destinationLocationCode,
      subType: Amadeus.location.any,
    });

    if (
      cityResponseOrigin.data.length === 0 ||
      cityResponseDestination.data.length === 0
    ) {
      return res.status(404).json({ message: "City not found" });
    }

    const originCity = cityResponseOrigin.data[0].address.cityCode;
    const destinationCity = cityResponseDestination.data[0].address.cityCode;

    const flightOffersResponse = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: originCity,
      destinationLocationCode: destinationCity,
      departureDate,
      returnDate,
      adults,
    });

    if (!flightOffersResponse.data || flightOffersResponse.data.length === 0) {
      return res.status(404).json({ message: "No flight offers found" });
    }

    res.json(flightOffersResponse.data);
  } catch (error) {
    console.error("Error fetching flight offers:", error);
    res
      .status(500)
      .json({ message: "Error fetching flight offers", error: error.message });
  }
});

export default routerFlight;
