const express = require('express');
const cors = require('cors');
//Se agregan las rutas de productos y categorias
var products = require('./product/routes');
var categories = require('./category/routes');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  app.use('/api/products', products);
  app.use('./api/categories', categories);
  
  return app;
}

module.exports = createApp;
