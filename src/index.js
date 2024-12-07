const express = require("express");
const app = express();
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const speakerRoutes = require("./routes/speakerRoutes");

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/speakers", speakerRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
