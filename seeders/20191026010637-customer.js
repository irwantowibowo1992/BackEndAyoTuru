'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('customers', [
     {
        name: 'Ino',
        identity_number: 123111234,
        phone_number: 628978654322,
        image: 'https://data.whicdn.com/images/282897924/original.jpg'
      },
      {
        name: 'Sakura',
        identity_number: 253486743,
        phone_number: 628956454456,
        image: 'https://honeysanime.com/wp-content/uploads/2015/09/sakura-naruto-wallpaper-2-700x438.jpg'
      },
      {
        name: 'Hinata',
        identity_number: 123111234,
        phone_number: 628956654342,
        image: 'https://medias.spotern.com/spots/w640/65/65581-1532336916.jpg'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('customers', null, {});
  }
};
