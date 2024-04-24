const mongoose = require('mongoose');
const { MONGOURI, DB_NAME } = require('../constants');

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGOURI}/${DB_NAME}`);
        console.log(`DB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDb;