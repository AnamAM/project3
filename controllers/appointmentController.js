const db = require("../models");

// Defining methods for the appointmentController
module.exports = {
  findAll: function(req, res) {
    console.log("FIND ALL WORKS in Appointment");
    db.Appointment
      .find(req.query)
      .populate("services")
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
      // console.log(req);
  },
  findById: function(req, res) {
    console.log("FIND APPOINTMENT BY ID");
    db.Appointment
      .findById(req.params.id)
      .populate("services")
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // console.log(req.body);
    db.Appointment
      .create(req.body)
      .then(dbAppointment => {res.json(dbAppointment)
      })
      .catch(err => {res.status(422) 
      // console.log()
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
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
        from: "oasali786@gmail.com",
        to: req.body.email,
        subject: "Confirmation Email",
        generateTextFromHTML: true,
        html: "<h3>Your service has been scheduled for " + req.body.date + " at " + req.body.time + "! We'll be looking forward to seeing you soon.</h3><p>Please do not reply to this message. Replies to this message are routed to an unmonitored mailbox. If you have any questions regarding your service appointment, email us!<p>"
      };
      smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
      });

    }
    main().catch(console.error);
  },
  joining: function(req, res) {
    // Create a new service and pass the req.body to the entry
    db.Services.create(req.body)
    .then(function(dbServices){
       // If a Service was selected and submitted successfully, find one Appointment with an `_id` equal to `req.params.id`. Update the Appointment to be associated with the selected Service
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Appointment.findOneAndUpdate({ _id: req.params.id }, { serviceId: dbServices._id }, { new: true });
    })
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    // console.log("deleted from appointment")
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbAppointment => dbAppointment.remove())
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  }
};