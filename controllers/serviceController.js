const db = require("../models");

// Defining methods for the servicesController
module.exports = {
  findAll: function(req, res) {
    db.Services
      .find(req.query)
      .sort({ date: -1 })
      .then(dbService => res.json(dbService))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Services
      .findById(req.params.id)
      .then(dbService => res.json(dbService))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Services
      .create(req.body)
      .then(dbService => res.json(dbService))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Services
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbService => res.json(dbService))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Services
      .findById({ _id: req.params.id })
      .then(dbService => dbService.remove())
      .then(dbService => res.json(dbService))
      .catch(err => res.status(422).json(err));
  }
};
