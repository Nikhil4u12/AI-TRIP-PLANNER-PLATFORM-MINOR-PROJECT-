const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

// TEST
router.get("/", (req, res) => {
  res.send("Trip API working");
});

// POST
router.post("/", async (req, res) => {
  const { destination, budget, days, interests } = req.body;

  try {
    const itinerary = [];

    for (let i = 1; i <= days; i++) {
      let activity = "";

      if (interests.includes("zoo")) {
        activity = "Visit Zoo 🐾";
      } else if (interests.includes("mall")) {
        activity = "Shopping 🛍️";
      } else if (interests.includes("nature")) {
        activity = "Park Visit 🌳";
      } else {
        activity = "City Tour 🏙️";
      }

      itinerary.push({
        day: i,
        activity: `${activity} in ${destination}`
      });
    }
    let hotelType = "";

if (budget < 2000) {
  hotelType = "Budget Hotel (₹800/night)";
} else if (budget < 5000) {
  hotelType = "Standard Hotel (₹2000/night)";
} else {
  hotelType = "Luxury Hotel (₹5000/night)";
}

    const trip = new Trip({
  destination,
  budget,
  days,
  interests,
  itinerary,
  totalCost: days * 2000,
  hotelType   // ✅ ADD THIS
});


    await trip.save();

    res.json(trip);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error ❌" });
  }
});

module.exports = router;