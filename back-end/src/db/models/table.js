"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    static associate(models) {
      Table.hasMany(models.Reservation, {
        onUpdate: "cascade",
        onDelete: "cascade",
      });
    }
  }
  Table.init(
    {
      name: {
        type: DataTypes.STRING(45),
      },
      capacity: {
        type: DataTypes.INTEGER,
      },
      isOccupied: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Table",
      indexes: [
        {
          unique: true,
          fields: ["name"],
        },
      ],
    }
  );
  return Table;
};
