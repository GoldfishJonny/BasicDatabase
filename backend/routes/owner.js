// routes/owner.js

const express = require('express');
const router = express.Router();
const Owner = require('../models/owner');

// Create a new boat owner
router.post('/', async (req, res) => {
    try {
        const owner = await Owner.create(req.body);
        res.status(201).json({ owner });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all boat owners
router.get('/', async (req, res) => {
    try {
        const owners = await Owner.find();
        res.json({ owners });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single boat owner by ID
router.get('/:id', async (req, res) => {
    try {
        const owner = await Owner.findById(req.params.id);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        res.json({ owner });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a boat owner by ID
router.put('/:id', async (req, res) => {
    try {
        const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        res.json({ owner });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a boat owner by ID
router.delete('/:id', async (req, res) => {
    try {
        const owner = await Owner.findByIdAndDelete(req.params.id);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        res.json({ message: 'Owner deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;