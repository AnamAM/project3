const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ContactSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
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

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;