'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    github_id: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Favorite);
    User.hasMany(models.Flight);
  };
  return User;
};