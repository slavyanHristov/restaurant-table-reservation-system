"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    static associate(models) {
      Table.belongsTo(models.reservation, {
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  Table.init(
    {
      name: {
        type: DataTypes.STRING(45),
        validate: {
          async isUnique(value) {
            const table = await Table.findOne({
              where: {
                name: value,
              },
            });
            if (table) throw new Error("Table with this name already exists!");
          },
          notEmpty: {
            arg: true,
            msg: "Table name shouldn't be blank!",
          },
        },
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            arg: true,
            msg: "Capacity shouldn't be blank!",
          },
          isInt: {
            arg: true,
            msg: "Should be an integer value!",
          },
          min: {
            args: [1],
            msg: "One seat needed at least!",
          },
          max: {
            args: [8],
            msg: "Maximum 8 seats per table!",
          },
        },
      },
      isOccupied: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "table",
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
