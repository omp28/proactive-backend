const Booking = require("../models/Booking");
const Speaker = require("../models/Speaker");

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

exports.getUserBookings = async (req, res) => {
  const userId = req.user.id;

  try {
    const bookings = await Booking.findAll({
      where: { userId },
      include: {
        model: Speaker,
        attributes: ["id", "expertise", "pricePerSession"],
      },
    });

    res.status(200).json({ bookings });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.cancelBooking = async (req, res) => {
  const { bookingId } = req.params;
  const userId = req.user.id;

  try {
    const booking = await Booking.findOne({ where: { id: bookingId, userId } });

    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    await booking.destroy();
    res.status(200).json({ message: "Booking cancelled successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
