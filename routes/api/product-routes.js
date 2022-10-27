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

  router.get('/:id', async (req, res) => {
    try {
      const productData = await Product.findByPk(req.params.id, {
        include: [{ model: Tag }, { model: Category }]
      })
      if (!productData) {
        res.status(404).json({ message: 'Product could not be found'});
        return;
      }
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err)
    }
  });
  