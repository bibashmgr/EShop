const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    size: {
      type: Array,
    },
    priceAmount: {
      type: String,
      require: true,
    },
    priceUnit: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('products', productSchema);
