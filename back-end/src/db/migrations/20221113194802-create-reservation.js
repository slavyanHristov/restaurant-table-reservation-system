"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reservations", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      resDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      resTime: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      people: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      resStatus: {
        type: Sequelize.ENUM("pending", "seated", "missed"),
        allowNull: false,
        defaultValue: "pending",
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Customers",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Reservations");
  },
};
