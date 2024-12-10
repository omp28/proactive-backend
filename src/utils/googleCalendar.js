const { google } = require("googleapis");
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
  GOOGLE_REFRESH_TOKEN,
} = process.env;

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

const calendar = google.calendar({ version: "v3", auth: oauth2Client });

exports.createGoogleCalendarEvent = async (booking) => {
  const { userId, speakerId, date, timeSlot } = booking;
  const user = await User.findByPk(userId);
  const speaker = await Speaker.findByPk(speakerId);

  const event = {
    summary: `Session with ${speaker.expertise}`,
    description: `A session booked with ${speaker.expertise}.`,
    start: {
      dateTime: `${date}T${timeSlot}:00`,
      timeZone: "America/New_York",
    },
    end: {
      dateTime: `${date}T${parseInt(timeSlot) + 1}:00`,
      timeZone: "America/New_York",
    },
    attendees: [{ email: user.email }, { email: speaker.email }],
  };

  try {
    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });
    console.log("Event created:", response.data.htmlLink);
  } catch (error) {
    console.error("Error creating Google Calendar event:", error);
  }
};
