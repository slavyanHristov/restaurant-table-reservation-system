"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [reservations, metadataRes] = await queryInterface.sequelize.query(
      "SELECT id from Reservations LIMIT 1;"
    );
    const [tables, metadataTable] = await queryInterface.sequelize.query(
      "SELECT id from Tables LIMIT 1;"
    );
    await queryInterface.bulkInsert(
      "Reservations_Tables",
      [
        {
          reservationId: reservations[0].id,
          tableId: tables[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reservations_Tables", null, {});
  },
};
