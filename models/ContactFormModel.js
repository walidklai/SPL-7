const mongoose = require("mongoose");

const ContactFormSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ContactForm = mongoose.model("contact", ContactFormSchema);
