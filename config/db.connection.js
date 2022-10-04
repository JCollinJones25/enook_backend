require('dotenv').config();
const mongoose = require('mongoose');
const connectionStr = process.env.MONGODB_URI

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... ✅ ✅ ✅`)
})

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error 🚨 🚨 🚨')
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected ⚡️ 🔌 ⚡️')
})