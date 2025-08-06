const mongoose = require("mongoose")
require("dotenv").config();

 const ConnectDB = async () => {

    try {
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfullyy...");

    } catch (error) {

        console.error(error);
        console.log("Database not connected successfullyy...", error);

    }
}

module.exports = ConnectDB;