const Booking = require("../models/Booking");

exports.bookSession = async (req, res) => {
  const { speakerId, date, timeSlot } = req.body;
  const userId = req.user.id;

  try {
    const existingBooking = await Booking.findOne({
      where: { speakerId, date, timeSlot },
    });

    if (existingBooking) {
      return res.status(400).json({ message: "Time slot already booked." });
    }

    const booking = await Booking.create({ userId, speakerId, date, timeSlot });
    res.status(201).json({ message: "Booking successful.", booking });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
