const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var orderItemSchema = new Schema({
    quantity: {
        type: Double
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Products"
    },
    invoiceId: {
        type: Schema.Types.ObjectId,
        ref: "Invoices"
    }
});

const OrderItems = mongoose.model("OrderItems", orderItemSchema);

module.exports = OrderItems;