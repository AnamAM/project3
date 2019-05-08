const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var customerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address."],
        required: true
    },
    phoneNum: {
        type: String
    },
    address: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;


// module.exports = function (sequelize, DataTypes) {
//     var Customer = sequelize.define("Customer", {
        
//         firstName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         lastName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             // match: [/.+@.+\..+/, "Please enter a valid e-mail address."]
//         },
//         phoneNum: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         address: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//     })
//     // one customer has many appointments
//     Customer.associate = function (models) {
//         Customer.hasMany(models.Appointment, {
//             onDelete: "cascade"
//         })
//     }
//     // one customer has many invoices
//     Customer.associate = function (models) {
//         Customer.hasMany(models.Invoice, {
//             onDelete: "cascade"
//         })
//     }
//     return Customer;
// };
