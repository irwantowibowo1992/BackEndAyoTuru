'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    customrId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    isBooked: DataTypes.BOOLEAN,
    isDone: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
    order_end_time: DataTypes.DATE
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
    booking.belongsTo(models.customer,{
      foreignKey: 'customrId',
      sourceKey: 'id'
    }),
    booking.belongsTo(models.room,{
      foreignKey: 'roomId',
      sourceKey: 'id'
    })
  };
  return booking;
};