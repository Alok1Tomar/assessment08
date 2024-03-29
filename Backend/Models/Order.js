// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
  orderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
