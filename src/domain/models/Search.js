const mongoose = require('mongoose');
const dataSources = require('../enums/data-sources');

const ProductSchema = new mongoose.Schema({
  word: { type: String, required: true },
  source: {
    type: String,
    required: true,
    enum: Object.values(dataSources),
  },
  products: [
    {
      name: { type: String, required: true },
      link: { type: String, required: true },
      price: { type: String, required: true },
      store: { type: String },
      state: { type: String },
    }
  ],
}, { timestamps: true });

module.exports = mongoose.Model('Product', ProductSchema);
