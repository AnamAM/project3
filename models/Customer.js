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