const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuarantineLocation = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: 50
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
        min: 0
    },
    patientsNumber: {
        type: Number,
        required: true,
        min: 0
    },
    


});

module.exports = mongoose.model('QuarantineLocation', QuarantineLocation);