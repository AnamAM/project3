const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var appointmentSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    vehicleMake: {
        type: String,
        required: true
    },
    vehicleModel: {
        type: String,
    },
    vehicleColor: {
        type: String,
    },
    date: {
        type: String
    },
    time: {
        // needs to be converted by using moment.js
        type: String
    },
    // allows us to populate appointment with an associated service
    services: [{
        type: Schema.Types.ObjectId,
        ref: "Services",
        required: true
    }],
    // allows us to populate appointment with an associated customer
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;