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
        type: String,
        default: Date.now
    },
    time: {
        // needs to be converted by using moment.js
        type: String,
        required: true
    },
    // allows us to populate appointment with an associated service
    serviceId: [{
        type: Schema.Types.ObjectId,
        ref: "Services"
    }],
    // allows us to populate appointment with an associated customer
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;