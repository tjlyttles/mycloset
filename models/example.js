module.exports = function(sequelize, DataTypes) {
  var Shirt = sequelize.define("Shirt", {
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.DECIMAL(2),
    condition: DataTypes.STRING,
    suitedFor: DataTypes.STRING,
    imgLink: DataTypes.STRING
  });
  // Shirt.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Shirt.HasOne(models.Url, {
  //     onDelete: "cascade"
  //   });
  // };
  return Shirt;
};
