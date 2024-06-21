const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  attachment: { type: Buffer },
  status: { type: String, default: "pending" },
});

const EmailModel = mongoose.model("emails", EmailSchema);

module.exports = EmailModel;
