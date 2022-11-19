"use strict";
const { Model } = require("sequelize");
const dateTimeValidator = require("../../utils/dateAndTimeValidator");
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      Reservation.belongsTo(models.customer, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
      Reservation.hasMany(models.table, {
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  Reservation.init(
    {
      resDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please enter reservation date!",
          },
          isDateInThePast(value) {
            const currDate = dateTimeValidator.asDateString(new Date());
            if (dateTimeValidator.isDateInThePast(currDate, value))
              throw new Error("Given date is in the past!");
          },
        },
      },
      resTime: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please enter reservation time!",
          },
        },
      },
      people: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      resStatus: {
        type: DataTypes.ENUM("pending", "seated", "missed"),
        allowNull: false,
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "reservation",
    }
  );
  return Reservation;
};
