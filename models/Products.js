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
    }
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;