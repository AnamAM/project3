const db = require("../models");

// Defining methods for the invoicesController
module.exports = {
  findAll: function(req, res) {
    db.Invoices
      .find(req.query)
      .sort({ date: -1 })
      .then(dbInvoices => res.json(dbInvoices))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Invoices
      .findById(req.params.id)
      .then(dbInvoices => res.json(dbInvoices))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Invoices
      .create(req.body)
      .then(dbInvoices => res.json(dbInvoices))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Invoices
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbInvoices => res.json(dbInvoices))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Invoices
      .findById({ _id: req.params.id })
      .then(dbInvoices => dbInvoices.remove())
      .then(dbInvoices => res.json(dbInvoices))
      .catch(err => res.status(422).json(err));
  }
};
