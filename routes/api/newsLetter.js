const express = require("express");
const config = require("config");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");

const router = express.Router();

//@route/api/newsletter
//method POST
//public

const mc_api_key = config.get("MAILCHIMP_API_KEY");
const list_id = config.get("LIST_ID");

const mailchimp = new Mailchimp(mc_api_key);

//@route/api/newsletter
//method GET
//public

router.get("/", (req, res) => {
  mailchimp
    .post(`/lists/${list_id}/members`, {
      email_address: req.query.email,
      status: "subscribed",
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//@route/api/newsletter
//method POST
//public

/* router.post(
  "/",
  [check("email", "please type your email").notEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
    try {
    } catch (err) {
      console.log(err.message);
      res.status(500).json([{ msg: "Server error" }]);
    }
  }
); */

module.exports = router;
