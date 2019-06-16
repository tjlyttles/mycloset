module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define("Url", {
    imgUrl: DataTypes.STRING
  });
  Url.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Url.hasMany(models.Shirt, {
      onDelete: "cascade"
    });
  };
  return Url;
};
