const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var cartSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    description: {
        type: String
    },
    isActive: {
        type: String,
        required: true
    }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
