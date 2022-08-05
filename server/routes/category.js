const express = require('express');

const router = express.Router();

// controllers:
const {
  getCategories,
  getCategory,
  createCategory,
  editCategory,
  deleteCategory,
} = require('../controllers/categoryControllers.js');

router.get('/', getCategories);

router.get('/:id', getCategory);

router.post('/create', createCategory);

router.put('/:id/edit', editCategory);

router.delete('/:id/delete', deleteCategory);

module.exports = router;
