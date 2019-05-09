const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var orderItemSchema = new Schema({
    numberOfItems: {
        type: String
    },
    productsId: {
        type: Schema.Types.ObjectId,
        ref: "Products"
    }
});

const OrderItems = mongoose.model("OrderItems", orderItemSchema);

module.exports = OrderItems;


// module.exports = function (sequelize, DataTypes) {
//     var OrderItem = sequelize.define("OrderItem", {

//         numberOfItems: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         }
//     })
//     // an orderitem belongs to one product 
//     OrderItem.associate = function (models) {
//         OrderItem.belongsTo(models.Product, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     }
//     return OrderItem;
// }
