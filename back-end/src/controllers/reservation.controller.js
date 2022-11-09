const reservationService = require("../services/reservation");
const reservationDAO = require("../DAOs/reservation.dao");
const getAllHandler = async (req, res) => {
  const reservations = await reservationService.getAllReservations(
    reservationDAO
  );

  return res.status(200).json({
    success: true,
    collection: reservations,
  });
};

module.exports = {
  getAllHandler,
};
