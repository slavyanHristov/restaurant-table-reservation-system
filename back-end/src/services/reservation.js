const getAllReservations = async (reservationDAO) => {
  return await reservationDAO.findAllReservations();
};

const registerReservation = async (reservationDAO, payload) => {
  return await reservationDAO.createReservation(payload);
};

const editReservation = async (reservationId, reservationDAO, payload) => {
  return await reservationDAO.updateReservation(reservationId, payload);
};

module.exports = {
  getAllReservations,
  registerReservation,
  editReservation,
};
