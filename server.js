require('dotenv').config();
const express = require('express');
const app = express();
require('./config/db.connection');
const { PORT } = process.env;
const methodOverride = require('method-override');
const booksController = require('./controllers/books_controller');
const cors = require('cors');
const morgan = require('morgan');

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/library', booksController);

// routes in controller
app.get('/', (req, res) => {
    res.redirect('/library');
});

app.listen(PORT, () => console.log(`Listening on Port: ${PORT} → 🌐`));