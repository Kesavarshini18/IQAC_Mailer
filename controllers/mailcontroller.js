const EmailModel = require("../models/mail"); // Assuming correct path to your EmailModel

const sendEmail = async (req, res) => {
  try {
    const { to, subject, body } = req.body;
    const attachment = req.file;
    // Create a new Email instance
    const newEmail = new EmailModel({
      to,
      subject,
      body,
      attachment: attachment ? attachment.buffer : null,
    });

    // Save the new email to MongoDB
    await newEmail.save();
    res.json({ success: true, message: "Email saved and sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
};

module.exports = {
  sendEmail,
};
