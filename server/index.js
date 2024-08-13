import express from "express";
import process from "process";
import cors from "cors";
import dotenv from "dotenv";
import routerHotel from "./routs/hotel.js";
import routerFlight from "./routs/flights.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const corsOptions = {
  origin: 'https://travelize-frontend.onrender.com', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

const app = express();
app.use(
cors((corsOptions))
);
app.get("/api", (req, res) => {
  3;
  res.json({ message: "Hello from server!" });
});

app.use("/hotels", routerHotel);
app.use("/tickets", routerFlight);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
