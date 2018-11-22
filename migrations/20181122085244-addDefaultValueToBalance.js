'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.changeColumn('Users', 'balance', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.changeColumn('Users', 'balance', {
      type: Sequelize.INTEGER
    });
  }
};
