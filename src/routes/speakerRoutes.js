const express = require("express");
const router = express.Router();
const { setupProfile } = require("../controllers/speakerController");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/setup-profile", authenticate, setupProfile);

module.exports = router;
