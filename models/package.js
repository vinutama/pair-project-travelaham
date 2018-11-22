'use strict';
module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define('Package', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    periode: DataTypes.STRING
  }, {});
  Package.associate = function(models) {
    // associations can be defined here
  };
  return Package;
};