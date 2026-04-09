const express = require("express");
const router = express.Router();
const User = require("../models/User");

// SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  const user = new User({ name, email, phone, password });
  await user.save();

  res.json({ message: "Signup successful" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  res.json(user);
});

module.exports = router;