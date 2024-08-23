import express from "express";
import process from "process";
import Amadeus from "amadeus";
import dotenv from "dotenv";
import { check, validationResult } from "express-validator";

dotenv.config();

const routerHotel = express.Router();

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

routerHotel.get(
  "/",
  [
    check("destination")
      .notEmpty()
      .withMessage("Destination can`t be empty")
      .isLength({ min: 3 })
      .withMessage("City has to be more than 3 symbols"),
    check("adults")
      .notEmpty()
      .withMessage("Adults quantity can`t be empty")
      .isLength({ min: 1 })
      .withMessage(" Adults can`t be less than 1 "),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { destination, adults } = req.query;

    try {
      const cityResponse = await amadeus.referenceData.locations.get({
        keyword: destination,
        subType: Amadeus.location.any,
      });
      const cityCode = cityResponse.data[0].address.cityCode;

      const hotelResponse =
        await amadeus.referenceData.locations.hotels.byCity.get({
          cityCode: cityCode,
        });

      let hotelIdsArr = hotelResponse.data
        .slice(0, 30)
        .map((hotel) => hotel.hotelId);

      const hotelOffersResponse = await amadeus.shopping.hotelOffersSearch.get({
        hotelIds: hotelIdsArr.join(","),
        adults: adults,
      });

      res.json(hotelOffersResponse.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      res
        .status(500)
        .json({ message: "Error fetching hotels", error: error.message });
    }
  }
);

export default routerHotel;
