const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    quantity: {
        type: String
    },
    isActive: {
        type: String,
        required: true
    }
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;


// module.exports = function (sequelize, DataTypes) {
//     var Product = sequelize.define("Product", {

//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         price: {
//             type: DataTypes.DOUBLE,
//             allowNull: false,
//         },
//         quantity: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         isActive: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//         },
//     })
//     // a product has many orderitems
//     Product.associate = function (models) {
//         Product.hasMany(models.OrderItem, {
//             onDelete: "cascade"
//         })
//     }
//     return Product;
// }
