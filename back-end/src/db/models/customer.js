"use strict";
const { Model } = require("sequelize");
const regularExpressions = require("../../utils/regularExpressions");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.reservation, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Customer.init(
    {
      firstName: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
          is: {
            args: regularExpressions.name.regex,
            msg: regularExpressions.name.msg,
          },
        },
      },
      lastName: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
          is: {
            args: regularExpressions.name.regex,
            msg: regularExpressions.name.msg,
          },
        },
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Invalid email address!",
          },
        },
      },
      phone: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
          is: {
            args: regularExpressions.phone.regex,
            msg: regularExpressions.phone.msg,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "customer",
      indexes: [
        {
          unique: true,
          fields: ["email"],
        },
      ],
    }
  );
  return Customer;
};
