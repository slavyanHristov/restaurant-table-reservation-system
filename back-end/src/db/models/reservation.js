"use strict";
const { Model, TIME } = require("sequelize");
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
      resDate: {
        type: DataTypes.DATEONLY,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please enter reservation date!",
          },
        },
      },
      resTime: {
        type: DataTypes.TIME,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please enter reservation time!",
          },
        },
      },
      people: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            arg: true,
            msg: "Should be an integer value!",
          },
          min: {
            args: [1],
            msg: "One person at least!",
          },
          max: {
            args: [20],
            msg: "Maximum 20 people per reservation!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "reservation",
    }
  );
  return Reservation;
};
