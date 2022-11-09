// const reservationDAO = require("../DAOs/reservation.dao");

const getAllReservations = async (reservationDAO) => {
  return await reservationDAO.findAllReservations();
};
module.exports = {
  getAllReservations,
};
