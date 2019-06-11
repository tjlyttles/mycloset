var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/shirt", function(req, res) {
    db.Shirt.findAll({}).then(function(dbShirt) {
      res.json(dbShirt);
    });
  });

  // Create a new example
  app.post("/api/shirt", function(req, res) {
    db.Shirt.create(req.body).then(function(dbShirt) {
      res.json(dbShirt);
    });
  });

  // Delete an example by id
  app.delete("/api/shirt/:id", function(req, res) {
    db.Shirt.destroy({ where: { id: req.params.id } }).then(function(dbShirt) {
      res.json(dbShirt);
    });
  });

  app.get("/api/dress", function(req, res) {
    db.Dress.findAll({}).then(function(dbDress) {
      res.json(dbDress);
    });
  });

  // Create a new example
  app.post("/api/dress", function(req, res) {
    db.Dress.create(req.body).then(function(dbDress) {
      res.json(dbDress);
    });
  });

  // Delete an example by id
  app.delete("/api/dress/:id", function(req, res) {
    db.Dress.destroy({ where: { id: req.params.id } }).then(function(dbDress) {
      res.json(dbDress);
    });
  });
};
