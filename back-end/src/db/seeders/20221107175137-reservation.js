"use strict";

const dateTimeValidator = require("../../utils/dateAndTimeValidator");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const [results, metadata] = await queryInterface.sequelize.query(
      "SELECT id from Customers LIMIT 1;"
    );
    const currDate = new Date();
    await queryInterface.bulkInsert(
      "Reservations",
      [
        {
          resDate: dateTimeValidator.asDateString(currDate),
          resTime: dateTimeValidator.asTimeString(
            new Date(currDate.setMinutes(currDate.getMinutes() + 15))
          ),
          people: 5,
          resStatus: "pending",
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
