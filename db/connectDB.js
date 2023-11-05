const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/gondalDb");
    return console.log("DB connected...");
  } catch (error) {
    return console.log(`DB Connection Error: ${error}`);
  }
};
module.exports = connectDB;
