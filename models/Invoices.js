const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var invoiceSchema = new Schema({
    quantity: {
        type: Number
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    }
});

const Invoices = mongoose.model("Invoices", invoiceSchema);

module.exports = Invoices;