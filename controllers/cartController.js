const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Cart
        .find(req.query)
        .then(dbCart => res.json(dbCart))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Cart
        .findById(req.params.id)
        .then(dbCart => res.json(dbCart))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log(req.body);
      db.Cart
        .create(req.body)
        .then(dbCart => res.json(dbCart))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Cart
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbCart => res.json(dbCart))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Cart
        .findById({ _id: req.params.id })
        .then(dbCart => dbCart.remove())
        .then(dbCart => res.json(dbCart))
        .catch(err => res.status(422).json(err));
    }
  };