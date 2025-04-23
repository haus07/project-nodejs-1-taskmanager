require('dotenv').config(); 
const mongoose = require('mongoose');

const url = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected Database');
    } catch (error) {
        console.error('Failed',error.message);
    }
};

module.exports = connectDB;