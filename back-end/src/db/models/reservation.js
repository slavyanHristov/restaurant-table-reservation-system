"use strict";
const { Model, TIME } = require("sequelize");
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
      Reservation.belongsToMany(models.table, {
        through: models.reservations_tables,
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
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
          isDateInThePast(value) {
            const currDate = dateTimeValidator.asDateString(new Date());
            if (dateTimeValidator.isDateInThePast(currDate, value))
              throw new Error("Given date is in the past!");
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
          isTimeInThePast(value) {
            const currTime = dateTimeValidator.asTimeString(new Date());
            if (dateTimeValidator.isDateInThePast(currTime, value))
              throw new Error("Given time is in the past!");
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
