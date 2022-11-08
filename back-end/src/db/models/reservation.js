"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      Reservation.belongsTo(models.customer, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Reservation.belongsTo(models.table, {
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Reservation.init(
    {
      resDate: DataTypes.DATEONLY,
      resTime: DataTypes.TIME,
      people: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "reservation",
    }
  );
  return Reservation;
};
