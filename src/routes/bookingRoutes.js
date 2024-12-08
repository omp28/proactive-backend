const express = require("express");
const router = express.Router();
const { bookSession } = require("../controllers/bookingController");
const { authenticate } = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.send("Hello Booking");
});
router.post("/book", authenticate, bookSession);

module.exports = router;
