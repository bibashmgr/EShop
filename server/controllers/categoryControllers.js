// models:
const category = require('../models/category.js');

// get all the categories
const getCategories = async (req, res) => {
  try {
    const categories = await category.find();
    res.json({
      status: 'ok',
      data: categories,
      message: 'Fetched All Categories',
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

// get a particular category
const getCategory = async (req, res) => {
  try {
    const isCategory = await category.findById(req.params.id);
    if (isCategory) {
      res.json({
        status: 'ok',
        data: isCategory,
        message: 'Fetched Category',
      });
    } else {
      res.json({
        status: 'fail',
        data: null,
        message: 'Category Not Found',
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

// create new category
const createCategory = async (req, res) => {
  try {
    const newCategory = new category({
      name: req.body.name,
    });
    const saveCategory = await newCategory.save();
    res.json({
      status: 'ok',
      data: null,
      message: 'Category Created',
    });
    console.log('Category Created');
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error.message,
    });
    console.log(error.message);
  }
};

// update exisiting category
const editCategory = async (req, res) => {
  try {
    const isCategory = await category.findById(req.params.id);
    if (isCategory) {
      const updatedCategory = await category.findByIdAndUpdate(isCategory._id, {
        name: req.body.name,
      });
      res.json({
        status: 'ok',
        data: null,
        message: 'Category Updated',
      });
      console.log(`Category:${isCategory._id} Updated`);
    } else {
      res.json({
        status: 'fail',
        data: null,
        message: 'Category Not found',
      });
      console.log('Category Not Found');
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

// delete exisiting category
const deleteCategory = async (req, res) => {
  try {
    const isCategory = await category.findById(req.params.id);
    if (isCategory) {
      const deleteCategory = await category.findByIdAndRemove(isCategory._id);
      res.json({
        status: 'ok',
        data: null,
        message: 'Category Deleted',
      });
      console.log(`Category:${isCategory._id} Deleted`);
    } else {
      res.json({
        status: 'fail',
        data: null,
        message: 'Category Not Found',
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
  getCategory,
  getCategories,
  createCategory,
  editCategory,
  deleteCategory,
};
