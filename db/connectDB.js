require('dotenv').config();
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    return console.log("DB connected...");
  } catch (error) {
    return console.log(`DB Connection Error: ${error}`);
  }
};
module.exports = connectDB;
