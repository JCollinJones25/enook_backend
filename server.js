const express = require('express');
const app = express();
const { PORT } = process.env;
require('dotenv').config();
require('./config/db.connection');
const methodOverride = require('method-override');
const booksController = require('./controllers/books_controller.js');

// middleware
app.use('/library', booksController)
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalURL}`);
    next();
})

// routes in controller
app.get('*', (req, res) => {
    const context = { error: req.error };
    return res.status(404).render("404", context);
});


app.listen(PORT, () => console.log(`Listening on Port: ${PORT} → 🌐`));