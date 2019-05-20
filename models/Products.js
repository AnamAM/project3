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
    id: {
        type: Number
    },
    company: {
        type: Number
    },
    name: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    info: {
        type: String
    },
    inCart: {
        type: Boolean,
        required: false
    }
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
