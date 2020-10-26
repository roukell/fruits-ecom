const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  orders: {
    type: Array,
    required: true
  },
  date: Date
});

const Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;
