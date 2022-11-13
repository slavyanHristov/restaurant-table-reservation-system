"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [results, metadata] = await queryInterface.sequelize.query(
      "SELECT id from Reservations LIMIT 1;"
    );

    await queryInterface.bulkInsert(
      "Tables",
      [
        {
          name: "Table #1",
          capacity: 4,
          isOccupied: false,
          reservationId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Table #2",
          capacity: 5,
          isOccupied: false,
          reservationId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Table #3",
          capacity: 6,
          isOccupied: false,
          reservationId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tables", null, {});
  },
};
