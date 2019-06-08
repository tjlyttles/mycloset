var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Shirt.findAll({}).then(function(dbShirt) {
      res.json(dbShirt);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Shirt.create(req.body).then(function(dbShirt) {
      res.json(dbShirt);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Shirt.destroy({ where: { id: req.params.id } }).then(function(dbShirt) {
      res.json(dbShirt);
    });
  });
};
