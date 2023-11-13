const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  location: String,
  eventTitle: String,
  dateAndTime: Number,
  duration: Number,
  description: String,
  filterTags: String,
  picture: String,
  socialMedia: String,
  ticketPrice: Number,
  ticketQuantity: Number,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
