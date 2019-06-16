module.exports = function(sequelize, DataTypes) {
  var Shirt = sequelize.define("Shirt", {
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.DECIMAL(2),
    condition: DataTypes.STRING,
    suitedFor: DataTypes.STRING
    //userFile: DataTypes.STRING
  });
  Shirt.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Shirt.belongsTo(models.Url, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Shirt;
};
