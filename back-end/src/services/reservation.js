const getAllReservations = async (reservationDAO) => {
  return await reservationDAO.findAllReservations();
};

const registerReservation = async (reservationDAO, payload) => {
  return await reservationDAO.createReservation(payload);
};

const editReservation = async (reservationId, reservationDAO, payload) => {
  return await reservationDAO.updateReservation(reservationId, payload);
};

const cancelReservation = async (reservationId, reservationDAO) => {
  const reservation = await reservationDAO.findReservationById(reservationId);
  if (reservation) return await reservationDAO.deleteReservation(reservation);

  throw {
    status: 400,
    message: "Given reservation doesn't exist!",
  };
};

const chooseTable = async (reservationId, reservationDAO, tableId) => {
  return await reservationDAO.createReservationsTables(reservationId, tableId);
};

module.exports = {
  getAllReservations,
  registerReservation,
  editReservation,
  cancelReservation,
  chooseTable,
};
