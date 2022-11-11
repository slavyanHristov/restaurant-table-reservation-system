const express = require("express");
const router = express.Router();
const tryCatchHandler = require("../middleware/tryCatch");
const httpMethodError = require("../middleware/httpMethodError");
const reservationController = require("../controllers/reservation.controller");

router
  .route("/")
  .get(tryCatchHandler(reservationController.getAllHandler))
  .post(tryCatchHandler(reservationController.registerHandler))
  .all(httpMethodError);

router
  .route("/:reservationId")
  .patch(tryCatchHandler(reservationController.editHandler))
  .all(httpMethodError);

module.exports = router;
