"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReservationsTables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReservationsTables.belongsTo(models.reservation, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      ReservationsTables.belongsTo(models.table, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  ReservationsTables.init(
    {},
    {
      sequelize,
      modelName: "reservations_tables",
    }
  );
  return ReservationsTables;
};
