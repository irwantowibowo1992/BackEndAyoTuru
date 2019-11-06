'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customrId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      roomId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'rooms',
          key: 'id'
        }
      },
      isBooked: {
        type: Sequelize.BOOLEAN
      },
      isDone: {
        type: Sequelize.BOOLEAN
      },
      duration: {
        type: Sequelize.INTEGER
      },
      order_end_time: {
         type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bookings');
  }
};