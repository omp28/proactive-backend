const Speaker = require("../models/Speaker");

exports.setupProfile = async (req, res) => {
  try {
    const { expertise, pricePerSession } = req.body;

    console.log(req.user.userType);
    if (req.user.userType !== "speaker") {
      return res
        .status(403)
        .json({ message: "Access denied. Only speakers can set up profiles." });
    }

    let speaker = await Speaker.findOne({ where: { userId: req.user.id } });

    if (speaker) {
      speaker.expertise = expertise;
      speaker.pricePerSession = pricePerSession;
      await speaker.save();
    } else {
      speaker = await Speaker.create({
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        expertise,
        pricePerSession,
        userId: req.user.id,
      });
    }

    res
      .status(200)
      .json({ message: "Speaker profile set up successfully.", speaker });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};
