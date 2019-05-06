const db = require("../models");

// Defining methods for the orderItemsController
module.exports = {
  findAll: function(req, res) {
    db.OrderItems
      .find(req.query)
      .sort({ date: -1 })
      .then(dbOrder => res.json(dbOrder))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.OrderItems
      .findById(req.params.id)
      .then(dbOrder => res.json(dbOrder))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.OrderItems
      .create(req.body)
      .then(dbOrder => res.json(dbOrder))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.OrderItems
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbOrder => res.json(dbOrder))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.OrderItems
      .findById({ _id: req.params.id })
      .then(dbOrder => dbOrder.remove())
      .then(dbOrder => res.json(dbOrder))
      .catch(err => res.status(422).json(err));
  }
};
