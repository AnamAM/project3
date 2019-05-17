// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// var productSchema = new Schema({
//     name: {
//         type: String
//     },
//     price: {
//         type: Number
//     },
//     quantity: {
//         type: Number
//     },
//     isActive: {
//         type: Boolean,
//         required: false
//     }
// });

// const Products = mongoose.model("Products", productSchema);

// module.exports = Products;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
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

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
