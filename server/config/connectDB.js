const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        const dbUri = process.env.MONGODB_URI;
        console.log("Connecting to MongoDB with URI: ", dbUri);
        await mongoose.connect(dbUri);

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Connected to DB");
        });

        connection.on('error', (error) => {
            console.log("Something is wrong in MongoDB: ", error);
        });
    } catch (error) {
        console.log("Something is wrong: ", error);
    }
}

module.exports = connectDB;
