"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [results, metadata] = await queryInterface.sequelize.query(
      "SELECT id from Customers LIMIT 1;"
    );
    await queryInterface.bulkInsert(
      "Reservations",
      [
        {
          resDate: "2022-11-09",
          resTime: "14:00",
          people: 5,
          tableId: null,
          customerId: results[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reservations", null, {});
  },
};
