import express from "express";
import process from "process";
import Amadeus from "amadeus";
import dotenv from "dotenv";

dotenv.config();

const routerHotel = express.Router();

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

routerHotel.get("/", async (req, res) => {
  const { destination, adults } = req.query;

  try {
    const cityResponse = await amadeus.referenceData.locations.get({
      keyword: destination,
      subType: Amadeus.location.any,
    });

    if (cityResponse.data.length === 0) {
      return res.status(404).json({ message: "City not found" });
    }

    const cityCode = cityResponse.data[0].address.cityCode;

    const hotelResponse =
      await amadeus.referenceData.locations.hotels.byCity.get({
        cityCode: cityCode,
      });

    if (!hotelResponse.data || hotelResponse.data.length === 0) {
      return res.status(404).json({ message: "No hotels found" });
    }

    let hotelIdsArr = hotelResponse.data
      .slice(0, 30)
      .map((hotel) => hotel.hotelId);

    if (hotelIdsArr.length === 0) {
      return res.status(404).json({ message: "No hotel IDs found" });
    }

    const hotelOffersResponse = await amadeus.shopping.hotelOffersSearch.get({
      hotelIds: hotelIdsArr.join(","),
      adults: adults,
    });
    if (!hotelOffersResponse.data || hotelOffersResponse.data.length === 0) {
      return res.status(404).json({ message: "No offers found" });
    }

    res.json(hotelOffersResponse.data);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res
      .status(500)
      .json({ message: "Error fetching hotels", error: error.message });
  }
});

export default routerHotel;
