const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var orderItemSchema = new Schema({
    numberOfItems: {
        type: Number
    },
    productsId: {
        type: Schema.Types.ObjectId,
        ref: "Products"
    }
});

const OrderItems = mongoose.model("OrderItems", orderItemSchema);

module.exports = OrderItems;