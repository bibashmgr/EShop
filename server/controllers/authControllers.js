const bcrypt = require('bcryptjs');

// models:
const user = require('../models/user.js');

// register new user
const registerUser = async (req, res) => {
  try {
    const isExist = await user.findOne({ email: req.body.email });
    if (!isExist) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new user({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hashPassword,
      });
      const savedUser = await newUser.save();
      res.json({
        status: 'ok',
        data: null,
        message: 'Registration Successful',
      });
    } else {
      res.json({
        status: 'fail',
        data: null,
        message: 'Email already taken',
      });
    }
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error,
    });
  }
};

// login existing user
const loginUser = async (req, res) => {
  try {
    const isExist = await user.findOne({ email: req.body.email });
    if (isExist) {
      const isMatch = await bcrypt.compare(req.body.password, isExist.password);
      isMatch
        ? res.json({
            status: 'ok',
            data: isExist,
            message: 'Login Successful',
          })
        : res.json({
            status: 'fail',
            data: null,
            message: 'Password Incorrect',
          });
    } else {
      res.json({
        status: 'fail',
        data: null,
        message: 'User not found',
      });
    }
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error,
    });
  }
};

module.exports = { registerUser, loginUser };
