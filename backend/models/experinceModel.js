const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    experienceTitle: {type: String, required: true},
    companyName: {type: String, required: true},
    startPeriod: {type: String, required: true},
    endPeriod: {type: String, required: true},
    experienceDescription: {type: String, required: true},


},{ timestamps: true});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;