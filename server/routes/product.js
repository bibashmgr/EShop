const express = require('express');

const router = express.Router();

// controllers:
const {
  getProducts,
  getProduct,
  createProduct,
  //   editProduct,
  //   deleteProduct,
} = require('../controllers/productControllers.js');

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/create', createProduct);

// router.put('/edit', editProduct);

// router.delete('/edit', deleteProduct);

module.exports = router;
