'use strict';
module.exports = (sequelize, DataTypes) => {
  var Favorite = sequelize.define('Favorite', {
    place_name: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Favorite.associate = function(models) {
    Favorite.belongsTo(models.User);
    Favorite.hasMany(models.Flight);
  };
  return Favorite;
};