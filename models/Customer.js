const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var customerSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: Double
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address."]
    },
    phoneNum: {
        type: String
    }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;