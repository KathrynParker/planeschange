'use strict';
module.exports = (sequelize, DataTypes) => {
  var Flight = sequelize.define('Flight', {
    flight_number: DataTypes.STRING,
    date: DataTypes.DATE,
    gate: DataTypes.STRING,
    airport_name: DataTypes.STRING,
    airport_code: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Flight.associate = function(models) {
    // associations can be defined here
  };
  return Flight;
};