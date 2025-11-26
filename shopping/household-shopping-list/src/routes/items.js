// This file defines the API routes for managing shopping cart items.

const express = require('express');
const router = express.Router();
const db = require('../db');

// Route to add an item to the cart
router.post('/items', async (req, res) => {
    const { name, quantity } = req.body;
    try {
        const newItem = await db.addItem(name, quantity);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add item' });
    }
});

// Route to get all items in the cart
router.get('/items', async (req, res) => {
    try {
        const items = await db.getItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve items' });
    }
});

// Route to delete an item from the cart
router.delete('/items/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.deleteItem(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete item' });
    }
});

module.exports = router;