'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Packages', 'quota', {
      type: Sequelize.INTEGER,
      defaultValue: 100
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('Packages', 'quota', {});
  }
};
