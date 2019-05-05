const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var invoiceSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    orderItemsId: {
        type: Schema.Types.ObjectId,
        ref: "OrderItems"
    }
});

const Invoices = mongoose.model("Invoices", invoiceSchema);

module.exports = Invoices;