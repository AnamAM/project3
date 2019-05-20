const express = require("express");
const router = require("express").Router();
const appointmentsController = require("./controllers/appointmentController");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// module.exports = {
//   create: function (req, res) {
//     console.log("create works");
//     db.Appointment
//       .create(req.body)
//       .then(dbAppointment => {
//         res.json(dbAppointment)
//       })
//       .catch(err => {
//         res.status(422)
//         console.log()
//       });

//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//       }
//     });

//     let mailOptions = {
//       from: "h.a.s.bloodclinic@gmail.com",
//       to: req.body.email,
//       subject: "Confirmation Email",
//       html: "<h3>Your appointment is scheduled for " + moment(req.body.date).format('LL') + " at " + req.body.time + " AM! We'll be looking forward to seeing you soon. Thank you for your service!</h3><p>Please do not reply to this message. Replies to this message are routed to an unmonitored mailbox. If you have any questions regarding your appointment, please give us a call at 1 (800)-HAS-LIFE.<p>"
//     };

//     transporter.sendMail(mailOptions, function (err, data) {
//       if (err) {
//         console.log("Error occured.", err);
//       }
//       else {
//         console.log("Email sent!")
//       }
//     });
//   }
// }

router.route("/").post(appointmentsController.create);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/OAS");

// Do shit when connected
const db = mongoose.connection;

db.once("open", () => {
 require('./scripts/ServiceSeed');
 require('./scripts/productsSeed');
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
