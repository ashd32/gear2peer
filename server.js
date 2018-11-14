const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
});

module.exports = app;


// FORCES database to reseed upon every start...
// db.sequelize.sync({force:true}).then(function() {
//   app.listen(PORT, function() {
//     console.log(`App listening on PORT ${PORT}`);
//   });
// });

// module.exports = app;