"use strict";
const { Model } = require("sequelize");
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
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
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
