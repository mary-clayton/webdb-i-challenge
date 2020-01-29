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
    try {

    } catch (err) {
        
    }
})

// POST
router.post('/', async (req, res) => {
    try {

    } catch (err) {
        
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
    try {

    } catch (err) {
        
    }
})

// DELETE 
router.delete('/:id', async (req, res) => {
    try {

    } catch (err) {
        
    }
})

module.exports = router