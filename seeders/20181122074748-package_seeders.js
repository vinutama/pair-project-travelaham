'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const dataPackage = [
      {
        name: 'Japan',
        price: 30000,
        periode: 'January - March',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'USA',
        price: 30000,
        periode: 'March - May',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Greece',
        price: 30000,
        periode: 'May - July',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Egypt',
        price: 30000,
        periode: 'July - September',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Netherland',
        price: 30000,
        periode: 'September - November',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ciledug',
        price: 30000,
        periode: 'November - December',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Packages', dataPackage, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Packages', null, {});
  }
};
