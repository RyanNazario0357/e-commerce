const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const productData = await Product.findAll({
        include: [{ model: Tag }, { model: Category }]
      });
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });