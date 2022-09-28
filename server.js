require('dotenv').config();
const { PORT } = process.env;
const express = require('express');
const app = express();
require('./config/db.connection');


app.get('/', (req, res) => {
    res.send('hello world');
});


app.listen(PORT, () => console.log(`Listening on Port: ${PORT} → 🌐`));