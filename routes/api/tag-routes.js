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

  router.get('/:id', async (req, res) => {
    try {
      const tagData = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }]
      })
      if (!tagData) {
        res.status(404).json({ message: 'Unavailable Tag' });
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err)
    }
  });

  router.post('/', async (req, res) => {
    try {
      const tagData = await Tag.create({
        tag_name: req.body.tag_name,
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err)
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const tagData = await Tag.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
      if (!tagData[0]) {
        res.status(404).json({ message: 'Unavailable Tag' });
        return;
      }
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err)
    }
  });