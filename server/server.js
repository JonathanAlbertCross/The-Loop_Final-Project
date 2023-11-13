const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
const Event = require("./models/Event");
mongoose.connect(MONGO_URL);

const data = require("./events.json");

// add your endpoints here
app.get("/", (_, response) => {
  response.json("Root");
});

app.get("/events", async (request, response) => {
  const event = await Event.find(request.query);
  response.json(event);
  console.log(event);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
