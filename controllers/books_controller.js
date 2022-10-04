const express = require('express');
const router = express.Router();
const db = require('../models')
const mongoose = require('mongoose');


// routes
//new
// router.get('/new', (req, res) => {
//     res.send('new route')
// });

//show
router.get('/:id/', (req, res) => {
    res.send('show route')
});

//edit
router.get('/:id/edit', (req, res) => {
    res.send('edit page')
});

//index
router.get('/', async (req, res) => {
    try {
        res.json(await db.Book.find({}));
    } catch (error) {
        res.status(400).json(error)
    }
});

//create
router.post('/', async (req, res) => {
    try {
        res.json(await db.Book.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

//update
router.put('/:id', (req, res) => {
    products[req.params.id] = req.body
    res.redirect(`/library/${req.params.id}`)
});

//delete
// router.delete('/:id', (req, res) => {
//     books.splice(req.params.bookId, 1);
//     return res.redirect('library');
// });




module.exports = router;