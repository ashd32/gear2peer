const RestfulAPI = require('./RestClass');
const models = require('../models');

module.exports = function (app) {
  
  const products = new RestfulAPI('products', app, models.Product);
  products.findAll();
  products.find('id');
  products.create();
  products.delete('id');
  products.update('id');

  const users = new RestfulAPI('users', app, models.User);
  users.findAll();
  users.find('id');
  users.create();
  users.delete('id');
  users.update('id');
console.log(users.findAll);
};