const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/mailcontroller");

// Route for sending emails
router.post("/", sendEmail);

module.exports = router;
