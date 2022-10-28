const {
    Product
  } = require('../models');
  
  const productData = [{
      product_name: 'Xbox Game',
      price: 44.99,
      stock: 10,
      category_id: 1,
    },
    {
      product_name: 'Console',
      price: 400.0,
      stock: 5,
      category_id: 5,
    },
    {
      product_name: 'Funko Pop',
      price: 14.99,
      stock: 20,
      category_id: 4,
    },
    {
      product_name: 'Headphones',
      price: 54.99,
      stock: 15,
      category_id: 3,
    },
    {
      product_name: 'Controller',
      price: 29.99,
      stock: 20,
      category_id: 2,
    },
  ];
  
  const seedProducts = () => Product.bulkCreate(productData);
  
  module.exports = seedProducts;
  