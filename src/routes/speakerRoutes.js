const express = require("express");
const router = express.Router();
const {
  setupProfile,
  getSpeakers,
} = require("../controllers/speakerController");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/setup-profile", authenticate, setupProfile);

router.get("/list", getSpeakers);

module.exports = router;
