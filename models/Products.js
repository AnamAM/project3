const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Double
    },
    quantity: {
        type: Number
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;