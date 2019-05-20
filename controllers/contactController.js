const db = require("../models");
require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  "388348640921-r8cbda2ctb016pl061e8naqmpqtoe75g.apps.googleusercontent.com", // ClientID
  "0iZRT-MLbtcui5ZVfms8JWCa", // Client Secret
  " https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token: "1/gROHkp84IbxHzNxCtum59LZdoWQLc9H0-P01H0_PUwA"
});

module.exports = {
  findAll: function (req, res) {
    db.Contact
      .find(req.query)
      .then(dbContact => res.json(dbContact))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Contact
      .findById(req.params.id)
      .then(dbContact => res.json(dbContact))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body.email);
    db.Contact
      .create(req.body)
      .then(dbContact => {
        res.json(dbContact)
      })
      .catch(err => {
        res.status(422)
      });
// async..await is not allowed in global scope, must use a wrapper
      async function main(){
        const tokens = await oauth2Client.refreshAccessToken()
        const accessToken = tokens.credentials.access_token
      
        const smtpTransport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "oasali786@gmail.com",
            clientId: process.env.client_id,
            clientSecret: process.env.client_secret,
            refreshToken: process.env.refresh_token,
            accessToken: accessToken
          }
        });
        const mailOptions = {
          from: "hasanain98@gmail.com",
          to: "oasali786@gmail.com",
          subject: req.body.subject,
          generateTextFromHTML: true,
          html: req.body.message
        };
        smtpTransport.sendMail(mailOptions, (error, response) => {
          error ? console.log(error) : console.log(response);
          smtpTransport.close();
        });
        
      }

      main().catch(console.error);
  },
  update: function (req, res) {
    db.Contact
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbContact => res.json(dbContact))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Contact
      .findById({ _id: req.params.id })
      .then(dbContact => dbContact.remove())
      .then(dbContact => res.json(dbContact))
      .catch(err => res.status(422).json(err));
  }
};

