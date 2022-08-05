// models:
const product = require('../models/product.js');

// get all the products
const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.json({
      status: 'ok',
      data: products,
      message: 'Success',
    });
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error,
    });
  }
};

// get a particular product
const getProduct = async (req, res) => {
  try {
    const isProduct = await product.findById(req.params.id);
    isProduct
      ? res.json({
          status: 'ok',
          data: isProduct,
          message: 'Success',
        })
      : res.json({
          status: 'fail',
          data: null,
          message: 'Not Found',
        });
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error.message,
    });
  }
};

// create new product
const createProduct = async (req, res) => {
  try {
    const newProduct = new product({
      name: req.body.name,
      category: req.body.category,
      priceAmount: req.body.priceAmount,
      priceUnit: req.body.priceUnit,
      desc: req.body.desc,
    });
    const saveProduct = await newProduct.save();
    res.json({
      status: 'ok',
      data: null,
      message: 'Product Created',
    });
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error,
    });
  }
};

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  //   editProduct,
  //   deleteProduct,
};
