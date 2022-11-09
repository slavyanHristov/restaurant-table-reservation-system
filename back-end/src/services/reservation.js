const getAllReservations = async (reservationDAO) => {
  return await reservationDAO.findAllReservations();
};

const registerReservation = async (reservationDAO, payload) => {
  return await reservationDAO.createReservation(payload);
};
module.exports = {
  getAllReservations,
  registerReservation,
};
