"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      Reservation.belongsTo(models.Customer, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Reservation.belongsTo(models.Table, {
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Reservation.init(
    {
      resDate: DataTypes.DATEONLY,
      resTime: DataTypes.TIME,
      tableId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Table",
          key: "id",
        },
      },
      customerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Customer",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Reservation",
    }
  );
  return Reservation;
};
