'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Name must be filled!`
        },
        len: {
          args: [2, 100],
          msg: `Minimum input 2 characters!`
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Username must be filled!`
        },
        len: {
          args: [2, 100],
          msg: `Minimum input 2 characters!`
        },
        isUnique(value) {
          return User.findOne({
            where: {
              username: value
            }
          })
            .then(function (found) {
              if (found) {
                throw new Error(`Invalid : Username already exists!`)
              }
            })
            .catch(function (err) {
              throw new Error(err)
            })
        }

      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Password must be filled!`
        },
        len: {
          args: [8, 100],
          msg: `Minimum input password 8 characters!`
        }
      }
    },
    balance: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `email must be filled!`
        },
        isEmail: {
          args: true,
          msg: `Invalid Email!`
        },
        isUnique(value) {
          return User.findOne({
            where: {
              email: value
            }
          })
            .then(function (found) {
              if (found) {
                throw new Error(`Invalid :Email already exists!`)
              }
            })
            .catch(function (err) {
              throw new Error(err)
            })
        }
      }
    }
  }, {
      hooks: {
        beforeCreate(user, options) {
          const salt = bcrypt.genSaltSync()
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    });
  User.associate = function (models) {
    User.belongsToMany(models.Package, { through: models.PackageUser })
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }
  return User;
};