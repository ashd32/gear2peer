const RestfulAPI = require('./RestClass');
const models = require('../models');
const scrapRei = require("../utils/scrape-rei.js");

module.exports = function (app) {
  
  const products = new RestfulAPI('products', app, models.Product, models.User);
  products.findAll();
  products.find('category');
  products.create();
  products.delete('id');
  products.update('id');


  app.get("/scrape-rei", function (req, res) {
    scrapRei(req.query.url).then(function (details) {
      res.json(details);
    });
  });


};