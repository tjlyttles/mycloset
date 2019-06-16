module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define("Url", {
    imgUrl: DataTypes.STRING
  });
  // Url.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Url.belongsTo(models.Shirt, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Url;
};
