const express = require("express");
const router = express.Router();
const {
  bookSession,
  getUserBookings,
  cancelBooking,
} = require("../controllers/bookingController");
const { authenticate } = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.send("Hello Booking");
});
router.post("/book", authenticate, bookSession);
router.get("/my-bookings", authenticate, getUserBookings);
router.delete("/cancel/:bookingId", authenticate, cancelBooking);

module.exports = router;
