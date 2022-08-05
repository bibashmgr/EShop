const express = require('express');

const router = express.Router();

// controllers:
const {
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
} = require('../controllers/productControllers.js');

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/create', createProduct);

router.put('/:id/edit', editProduct);

router.delete('/:id/delete', deleteProduct);

module.exports = router;
