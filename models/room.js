'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    name: DataTypes.STRING
  }, {});
  room.associate = function(models) {
    // associations can be defined here

    room.belongsToMany(models.customer,{
      through: 'booking',
      as: 'customers',
      foreignKey: 'roomId'
    })
  };
  return room;
};