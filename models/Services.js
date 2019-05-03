const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: {
        type: String
    }
});

const Services = mongoose.model("Services", serviceSchema);

module.exports = Services;