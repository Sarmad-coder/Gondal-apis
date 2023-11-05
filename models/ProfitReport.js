const mongoose = require("mongoose");
const Profit = new mongoose.Schema({
  name: { type: String, default: "" },
  pId: { type: String },
  qty: { type: Number },
  grandTotal: { type: Number },
  productCost: { type: Number },
});
module.exports = mongoose.model("Profit", Profit);
