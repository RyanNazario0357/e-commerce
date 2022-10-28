const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const tagData = await Tag.findAll({
        include: [{ model: Product }]
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err)
    }
  });