const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    color: {
      type: Array,
      default: [],
    },
    priceAmount: {
      type: Number,
      require: true,
    },
    priceUnit: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    desc: {
      type: String,
    },
    image: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('products', productSchema);
