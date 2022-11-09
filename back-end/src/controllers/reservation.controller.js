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

const registerHandler = async (req, res) => {
  const payload = req.body;
  const reservation = await reservationService.registerReservation(
    reservationDAO,
    payload
  );

  return res.status(200).json({
    success: true,
    message: "Successfully registered the reservation!",
  });
};

module.exports = {
  getAllHandler,
  registerHandler,
};
