// models:
const product = require('../models/product.js');

// get all the products
const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.json({
      status: 'ok',
      data: products,
      message: 'Fetched All Products',
    });
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error.message,
    });
    console.log(error.message);
  }
};

// get a particular product
const getProduct = async (req, res) => {
  try {
    const isProduct = await product.findById(req.params.id);
    if (isProduct) {
      res.json({
        status: 'ok',
        data: isProduct,
        message: 'Fetched Product',
      });
    } else {
      res.json({
        status: 'fail',
        data: null,
        message: 'Product Not Found',
      });
    }
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error.message,
    });
    console.log(error.mesage);
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
    console.log('Product Created');
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error.message,
    });
    console.log(error.message);
  }
};

// update exisiting product
const editProduct = async (req, res) => {
  try {
    const isProduct = await product.findById(req.params.id);
    if (isProduct) {
      const updatedProduct = await product.findByIdAndUpdate(isProduct._id, {
        name: req.body.name,
        category: req.body.category,
        priceAmount: req.body.priceAmount,
        priceUnit: req.body.priceUnit,
        desc: req.body.desc,
      });
      res.json({
        status: 'ok',
        data: null,
        message: 'Product Updated',
      });
      console.log(`Product:${isProduct._id} Updated`);
    } else {
      res.json({
        status: 'fail',
        data: null,
        message: 'Product Not found',
      });
      console.log('Product Not Found');
    }
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error,
    });
    console.log(error.message);
  }
};

// delete exisiting product
const deleteProduct = async (req, res) => {
  try {
    const isProduct = await product.findById(req.params.id);
    if (isProduct) {
      const deleteProduct = await product.findByIdAndRemove(isProduct._id);
      res.json({
        status: 'ok',
        data: null,
        message: 'Product Deleted',
      });
      console.log(`Product:${isProduct._id} Deleted`);
    } else {
      res.json({
        status: 'fail',
        data: null,
        message: 'Product Not Found',
      });
    }
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error,
    });
    console.log(error.message);
  }
};

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  editProduct,
  deleteProduct,
};
