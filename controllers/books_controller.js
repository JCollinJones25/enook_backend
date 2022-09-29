const express = require('express');
const router = express.Router();
const books = require('../models/Book.js');

// routes
//new
router.get('/new', (req, res) => {
    res.send('new route')
});

//show
router.get('/:id/', (req, res) => {
    res.send('show route')
});

//edit
router.get('/:id/edit', (req, res) => {
    res.send('edit page')
});

//index
router.get('/', (req, res) => {
    res.send('library index page')
});

//create
router.post('/', (req, res) => {
    books.push(req.body)
    res.redirect('/library')
});

//update
router.put('/:id', (req, res) => {
    products[req.params.id] = req.body
    res.redirect(`/library/${req.params.id}`)
});

//delete
router.delete('/:id', (req, res) => {
    books.splice(req.params.bookId, 1);
    return res.redirect('library');
});




module.exports = router;