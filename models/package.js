'use strict';
module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define('Package', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    periode: DataTypes.STRING,
    quota: DataTypes.INTEGER
  }, {});
  Package.associate = function (models) {
    // Package.belongsToMany(models.User)
  };
  return Package;
};