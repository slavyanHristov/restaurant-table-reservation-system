const reservationDAO = require("../DAOs/reservation.dao");

const getAllReservations = async () => {
  return await reservationDAO.findAllReservations();
};
module.exports = {
  getAllReservations,
};
