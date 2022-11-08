const db = require("../db/models");
const Reservation = db.reservation;
const Customer = db.customer;

const findAllReservations = async () => {
  const reservations = await Reservation.findAll({
    attributes: ["id", "resDate", "resTime"],
    include: [
      {
        model: Customer,
        attributes: ["id", "firstName", "lastName", "email", "phone"],
      },
    ],
  });
  console.log(reservations);
  return reservations;
};

module.exports = {
  findAllReservations,
};
