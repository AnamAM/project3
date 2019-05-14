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
    console.log(req.body);
    db.Appointment
      .create(req.body)
      .then(dbAppointment => {res.json(dbAppointment)
      })
      .catch(err => {res.status(422) 
      console.log()});
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
    console.log("deleted from appointment")
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbAppointment => dbAppointment.remove())
      .then(dbAppointment => res.json(dbAppointment))
      .catch(err => res.status(422).json(err));
  }
};