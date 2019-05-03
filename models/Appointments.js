const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var appointmentSchema = new Schema({
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
        match: [/.+@.+\..+/, "Please enter a valid e-mail address."]
    },
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
        type: Timestamp,
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
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;