const mongoose = require("mongoose");
const PaymentHistory = new mongoose.Schema({
    supplierId: { type: String, ref: "Supplier" },
    amount: { type: Number },
    paymentMethod: { type: String },
},
{ timestamps: true }
);
module.exports = mongoose.model("PaymentHistory", PaymentHistory);
