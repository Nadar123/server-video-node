const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.post('/', async (req, res, next) => {
  try {
    const category = new Category({
    category: req.body.category,
    });

    const result = await category.save()
    res.status(201).json({
      message: 'category is working',
      result
    });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('get server error')
  }
});
router.get('/', async (req, res, next) => {
  try {
    const category = await Category.find({});

    res.status(201).json({
      message: 'category is working',
      category 
    });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('get server error')
  }
});

module.exports = router