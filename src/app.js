const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const app = express();

const authRoutes = require("./routes/authRoutes");
const speakerRoutes = require("./routes/speakerRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/auth", authRoutes);
app.use("/api/speakers", speakerRoutes);
app.use("/api/bookings", bookingRoutes);

module.exports = app;
