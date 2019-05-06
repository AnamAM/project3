const db = require("../models");

// Defining methods for the productsController
module.exports = {
  findAll: function(req, res) {
    db.Products
      .find(req.query)
      .sort({ date: -1 })
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Products
      .findById(req.params.id)
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Products
      .create(req.body)
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Products
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Products
      .findById({ _id: req.params.id })
      .then(dbProducts => dbProducts.remove())
      .then(dbProducts => res.json(dbProducts))
      .catch(err => res.status(422).json(err));
  }
};
