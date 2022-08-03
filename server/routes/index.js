const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.json({
      status: 'ok',
      data: null,
      message: 'Welcome to EShop Api',
    });
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: error,
    });
  }
});

module.exports = router;
