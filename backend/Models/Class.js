// models/Class.js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: { type: String, required: true },
    instructor: { type: String, required: true },
    time: { type: String, required: true },
    // Add more fields as needed
});

module.exports = mongoose.model('Class', classSchema);
