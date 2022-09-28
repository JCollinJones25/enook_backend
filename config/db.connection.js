const mongoose = require('mongoose');
require('dotenv').config();
const { MONGODB_URI } = process.env
const connectionStr = MONGODB_URI

mongoose.connect(connectionStr);

mongoose.connection.on('connecte', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... ✅ ✅ ✅`)
})

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error 🚨 🚨 🚨')
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected ⚡️ 🔌 ⚡️')
})