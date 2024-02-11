// routes/boat.js

const express = require('express');
const router = express.Router();
const Boat = require('../models/Boat');

// Create a new boat
router.post('/', async (req, res) => {
    try {
        const boat = await Boat.create(req.body);
        res.status(201).json({ boat });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all boat
router.get('/', async (req, res) => {
    try {
        const boat = await Boat.find();
        res.json({ boat });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single boat by ID
router.get('/:id', async (req, res) => {
    try {
        const boat = await Boat.findById(req.params.id);
        if (!boat) {
            return res.status(404).json({ message: 'Boat not found' });
        }
        res.json({ boat });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a boat by ID
router.put('/:id', async (req, res) => {
    try {
        const boat = await Boat.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!boat) {
            return res.status(404).json({ message: 'Boat not found' });
        }
        res.json({ boat });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a boat by ID
router.delete('/:id', async (req, res) => {
    try {
        const boat = await Boat.findByIdAndDelete(req.params.id);
        if (!boat) {
            return res.status(404).json({ message: 'Boat not found' });
        }
        res.json({ message: 'Boat deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;