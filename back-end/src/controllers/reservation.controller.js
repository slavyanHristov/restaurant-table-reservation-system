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

const editHandler = async (req, res) => {
  const payload = req.body;
  const reservationId = req.params.reservationId;
  const reservation = await reservationService.editReservation(
    reservationId,
    reservationDAO,
    payload
  );

  return res.status(200).json({
    success: true,
    message: "Successfully edit the reservation!",
    item: reservation,
  });
};

module.exports = {
  getAllHandler,
  registerHandler,
  editHandler,
};
