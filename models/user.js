'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
      hooks: {
        beforeCreate(user, options) {
          const salt = bcrypt.genSaltSync()
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};