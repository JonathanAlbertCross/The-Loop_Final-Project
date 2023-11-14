const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
  OrganizerName: String,
  Name: String,
  Location: String,
  EventTitle: String,
  DateTime: String,
  Duration: String,
  Description: String,
  FilterTags: Array,
  PictureOptionUpload: String,
  SocialMediaLink: String,
  TicketPrice: Number,
  QuantityTickets: Number,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
