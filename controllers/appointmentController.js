const db = require("../models");

// Defining methods for the appointmentController
module.exports = {
  findAll: function(req, res) {
    db.Appointment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Appointment
      .findById(req.params.id)
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {

    db.Appointment
      .create(req.body)
      .then(dbAppointment => {res.json(dbAppointment)
        console.log(dbAppointment);
      })
      .catch(err => {res.status(422)
      console.log(err)});
  },
  update: function(req, res) {
    db.Appointment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  },
  // Route for grabbing a specific Appointment by id, populate it with it's Service
  populates: function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Appointment.findOne({ _id: req.params.id })
      // ..and populate all of the Services associated with it
      .populate("Services")
      .then(function(dbAppointment) {
        // If we were able to successfully find an Appoinment with the given id, send it back to the client
        res.json(dbAppointment);
        console.log(dbAppointment);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
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
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbAppointment => dbAppointment.remove())
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  }
};