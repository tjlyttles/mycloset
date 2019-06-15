module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define("Url", {
    imgUrl: DataTypes.STRING
  });
  return Url;
};
