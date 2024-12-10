const nodemailer = require("nodemailer");
const { GOOGLE_EMAIL, GOOGLE_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GOOGLE_EMAIL,
    pass: GOOGLE_PASSWORD,
  },
});

exports.sendEmailNotification = async (booking) => {
  const { userId, speakerId, date, timeSlot } = booking;
  const user = await User.findByPk(userId);
  const speaker = await Speaker.findByPk(speakerId);

  const mailOptions = {
    from: GOOGLE_EMAIL,
    to: [user.email, speaker.email],
    subject: "New Session Booking",
    text: `You have a new session booked with the following details:
        Date: ${date}
        Time Slot: ${timeSlot}
        Speaker: ${speaker.expertise}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
