const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var appointmentSchema = new Schema({
    vehicleYear: {
        type: Number,
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
    licenseNum: {
        type: String,
        required: true
    },
    time: {
        // needs to be converted by using moment.js
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    // allows us to populate appointment with an associated service
    serviceId: {
        type: Schema.Types.ObjectId,
        ref: "Services"
    },
    // allows us to populate appointment with an associated customer
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;