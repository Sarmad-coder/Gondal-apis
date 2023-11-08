const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sarmadawan35:DtNplVTmaWuQdS9S@mycluster.cytjjkg.mongodb.net/gondalDb");
    return console.log("DB connected...");
  } catch (error) {
    return console.log(`DB Connection Error: ${error}`);
  }
};
module.exports = connectDB;
