// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users 'visit' a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get('/products.html#backpacking', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html#backpacking'));
  });

  app.get('/products.html#biking', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html#biking'));
  });

  app.get('/products.html#campers', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html#campers'));
  });
  
  app.get('/products.html#camping', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html#camping'));
  });

  app.get('/products.html#fishing', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html#fishing'));
  });

  app.get('/products.html#rockClimbing', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html#rockClimbing'));
  });

  app.get('/products.html#waterSports', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html#waterSports'));
  });

  app.get('/products.html#winterSports', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html#winterSports'));
  });

  app.get('/user', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/user.html'));
  });
  
  app.get('/results', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/results.html'));
  });

  app.get('/products', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html'));
  });

  app.get('/posting', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/posting.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/user', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/user.html'));
  });

  // If no matching route is found default to home
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};