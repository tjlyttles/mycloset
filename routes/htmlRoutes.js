var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/userhome", function(req, res) {
    res.render("userhome");
  });

  app.get("/userhome/mens-shirts", function(req, res) {
    db.Shirt.findOne({ where: { suitedFor: men } }).then(function(dbShirt) {
      res.render("example", {
        shirt: dbShirt
      });
    });
  });

  app.get("/additems", function(req, res) {
    res.render("additems");
  });
  // Load example page and pass in an example by id
  app.get("/shirt/:id", function(req, res) {
    db.Shirt.findOne({ where: { id: req.params.id } }).then(function(dbShirt) {
      res.render("shirt", {
        shirt: dbShirt
      });
    });
  });

  app.get("/items", function(req, res) {
    res.render("example");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
