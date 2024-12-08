const express = require("express");
const app = express();
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const speakerRoutes = require("./routes/speakerRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/speakers", speakerRoutes);
app.use("/api/bookings", bookingRoutes);

module.exports = app;
