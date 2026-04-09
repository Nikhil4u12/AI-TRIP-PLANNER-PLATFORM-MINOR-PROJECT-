const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const tripRoutes = require("./routes/trip");
const authRoutes = require("./routes/auth");

// ✅ पहले app बनाओ
const app = express();

// ✅ middleware
app.use(cors());
app.use(express.json());

// ✅ routes (app के बाद ही)
app.use("/api/trip", tripRoutes);
app.use("/api/auth", authRoutes);

// test
app.get("/", (req, res) => {
  res.send("Server Working");
});

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/tripDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// server start
app.listen(5001, () => console.log("Server running on 5001"));