const reservationService = require("../services/reservation");

const getAllHandler = async (req, res) => {
  const reservations = await reservationService.getAllReservations();

  return res.status(200).json({
    success: true,
    collection: reservations,
  });
};

module.exports = {
  getAllHandler,
};
