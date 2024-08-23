import express from "express";
import Amadeus from "amadeus";
import dotenv from "dotenv";
import process from "process";
import { check, validationResult } from "express-validator";

dotenv.config();

const routerFlight = express.Router();

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

routerFlight.get(
  "/",
  [
    check("originLocationCode")
      .notEmpty()
      .withMessage("City departure can't be empty")
      .isLength({ min: 3 })
      .withMessage("City departure name must be at least 3 characters long"),
    check("destinationLocationCode")
      .notEmpty()
      .withMessage("City arrival can't be empty")
      .isLength({ min: 3 })
      .withMessage("City arrival name must be at least 3 characters long"),
    check("departureDate")
      .notEmpty()
      .withMessage("Departure date can't be empty")
      .isLength({ min: 8 })
      .withMessage("Departure date must be in YYYY-MM-DD format"),
    check("returnDate")
      .notEmpty()
      .withMessage("Return date can't be empty")
      .isLength({ min: 8 })
      .withMessage("Return date must be in YYYY-MM-DD format"),
    check("adults")
      .notEmpty()
      .withMessage("Adults quantity can't be empty")
      .isLength({ min: 1 })
      .withMessage("Adults can't be less than 1"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({ errors: errors.array() });
    }

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

      const cityResponseDestination = await amadeus.referenceData.locations.get(
        {
          keyword: destinationLocationCode,
          subType: Amadeus.location.any,
        }
      );

      const originCity = cityResponseOrigin.data[0].address.cityCode;
      const destinationCity = cityResponseDestination.data[0].address.cityCode;

      const flightOffersResponse =
        await amadeus.shopping.flightOffersSearch.get({
          originLocationCode: originCity,
          destinationLocationCode: destinationCity,
          departureDate,
          returnDate,
          adults,
        });

      res.json(flightOffersResponse.data);
    } catch (error) {
      console.error("Error fetching flight offers:", error);
      res.status(500).json({
        message: "Error fetching flight offers",
        error: error.message,
      });
    }
  }
);

export default routerFlight;
