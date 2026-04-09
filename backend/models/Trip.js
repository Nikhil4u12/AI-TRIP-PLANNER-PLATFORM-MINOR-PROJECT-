const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  destination: String,
  hotelType: String,
  budget: Number,
  days: Number,
  interests: String,
  itinerary: Array,
  totalCost: Number
});

module.exports = mongoose.model("Trip", tripSchema);