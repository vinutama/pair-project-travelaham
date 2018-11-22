'use strict';
module.exports = (sequelize, DataTypes) => {
  const PackageUser = sequelize.define('PackageUser', {
    PackageId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    point: DataTypes.INTEGER
  }, {});
  PackageUser.associate = function(models) {
    // associations can be defined here
  };
  return PackageUser;
};