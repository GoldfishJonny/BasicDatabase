// models/Material.js

const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    pricePerUnit: {
        type: Number,
        required: true
    }
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;