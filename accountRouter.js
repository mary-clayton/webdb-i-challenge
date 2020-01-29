// import
const express = require('express');

// database access using knex
const db = require('./data/dbConfig');

//router
const router = express.Router();

// GET
router.get('/', async (req, res) => {
    try {
        const accounts = await db('accounts')
        res.json(accounts)
    } catch (err) {
        res.status(500).json({ message: 'failed to get account info' })
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const account = await db('accounts').where('id', id)
        res.json(account);
    } catch (err) {
        res.status(500).json({ message: 'failed to get account info with specific id' })
    }
})

// POST
router.post('/', async (req, res) => {
    const accountData = req.body;
    try {
        const account = await db('accounts').insert(accountData);
        res.status(201).json(account)
    } catch (err) {
        res.status(500).json({ message: 'failed to create account info' })
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
    const {id} = req.params
    const accountData = req.body
    try {
        const accountUpdated = await db('accounts').where('id', id).update(accountData);
        res.status(200).json({ updated: accountUpdated });
    } catch (err) {
        res.status(500).json({ message: 'failed to update account info with specific id' })
    }
})

// DELETE 
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const accountDeleted = await db('accounts').where('id', id).del();
        res.json({ deletedRecords: accountDeleted })
    } catch (err) {
        res.status(500).json({ message: 'failed to delete account info with specific id' })
    }
})

module.exports = router