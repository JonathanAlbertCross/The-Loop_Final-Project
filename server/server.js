const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

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
});

app.post("/events", async (request, response) => {
  const newEvent = await Event.create(request.body);
  response.json(newEvent);
});

app.put("/events/:id", async (request, response) => {
  const { id } = request.params;
  const updatedEvent = await Event.findByIdAndUpdate(id, request.body, {
    new: true,
  });
  response.json(updatedEvent);
});

app.delete("/events/:id", async (request, response) => {
  const { id } = request.params;
  const deletedEvent = await Event.findByIdAndDelete(id);
  response.json(deletedEvent);
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
