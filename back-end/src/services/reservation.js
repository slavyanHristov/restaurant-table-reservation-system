const reservationDAO = require("../dao/reservation.dao");

const getAllReservations = async () => {
  return await reservationDAO.findAllReservations();
};
module.exports = {
  getAllReservations,
};
