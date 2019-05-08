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


// module.exports = function (sequqlize, DataTypes) {
//     var Invoice = sequqlize.define("Invoice", {

//     })
//     // an invoice belongs to an orderitem
//     Invoice.associate = function (models) {
//         Invoice.belongsTo(models.OrderItem, {
//             foreignKey: {
//                 allowNull: false,
//             }
//         })
//     }
//     // an invoice belongs to a customer
//     Invoice.associate = function (models) {
//         Invoice.belongsTo(models.OrderItem, {
//             foreignKey: {
//                 allowNull: false,
//             }
//         })
//     }
//     return Invoice;
// };