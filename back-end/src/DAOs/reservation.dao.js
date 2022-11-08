const db = require("../db/models");
const Reservation = db.reservation;
const Customer = db.customer;

const { flattenArrayObjects } = require("../utils/flattenObject");

const findAllReservations = async () => {
  const reservations = await Reservation.findAll({
    attributes: ["resDate", "resTime", "people"],
    include: [
      {
        model: Customer,
        attributes: ["firstName", "lastName", "email", "phone"],
      },
    ],
  });
  return flattenArrayObjects(reservations);
};

module.exports = {
  findAllReservations,
};
