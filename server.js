require('dotenv').config();
const { PORT } = process.env;
const express = require('express');
const app = express();
require('./config/db.connection');
const books = require('./models/Book.js');

// middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalURL}`);
    next();
})

// routes
app.get('/', (req, res) => {
    res.send('home page');
});

app.get('/library', (req, res) => {
    res.send('library page');
});

app.get('/library/:bookId', (req, res) => {
    res.send('book page');
});

app.get('/library/new', (req, res) => {
    res.send('new book');
});

app.post('/library/', (req, res) => {
    console.log(req.body);
    res.send('data received')
});

app.delete('/library/:bookId', (req, res) => {
    books.splice(req.params.bookId, 1);
    return res.redirect('library');
});


app.get('*', (req, res) => {
    const context = { error: req.error };
    return res.status(404).render("404", context);
});


app.listen(PORT, () => console.log(`Listening on Port: ${PORT} → 🌐`));