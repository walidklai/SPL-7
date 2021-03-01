const express = require("express");
const { check, validationResult } = require("express-validator");
const ContactForm = require("../../models/ContactFormModel");

const router = express.Router();

//@route/api/contact
//method POST
//public

router.post(
  "/",
  [
    check("email", "Please type a correct email format").isEmail(),
    check("message", "please type your message").notEmpty(),
  ],
  async (req, res) => {
    const { email, message } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
    try {
      const newContact = new ContactForm({
        email,
        message,
      });
      await newContact.save();
      res.status(200).json(newContact);
    } catch (err) {
      console.log(err.message);
      res.status(500).json([{ msg: "Server error" }]);
    }
  }
);

module.exports = router;
