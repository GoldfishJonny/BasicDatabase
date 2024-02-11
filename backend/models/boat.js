// models/Boat.js

const mongoose = require('mongoose');
const Owner = require('./owner.js');
const Material = require('./material.js');

const boatSchema = new mongoose.Schema({
    name: String,
    boatowner: [Owner.schema],
    location: String,
    brand: String,
    size: Number,
    materials: [Material.schema]
});

const Boat = mongoose.model('Boat', boatSchema);

module.exports = Boat;