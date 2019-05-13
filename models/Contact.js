const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ContactSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address."],
        required: true
    },
    subject: {
        type: String,
        reuqired: true
    },
    message: {
        type: String,
        reuqired: true
    }
});

const Contact = mongoose.model("Customer", customerSchema);

module.exports = Contact;