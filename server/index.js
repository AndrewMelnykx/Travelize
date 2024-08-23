import express from "express";
import process from "process";
import cors from "cors";
import dotenv from "dotenv";
import routerHotel from "./routes/hotel.js";
import routerFlight from "./routes/flights.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
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
