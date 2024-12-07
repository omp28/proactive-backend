const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Speaker = sequelize.define("Speaker", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  expertise: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pricePerSession: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Speaker;
