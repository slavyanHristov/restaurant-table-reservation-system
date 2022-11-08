const express = require("express");
const router = express.Router();
const tryCatchHandler = require("../middleware/tryCatch");
const httpMethodError = require("../middleware/httpMethodError");
const reservationController = require("../controllers/reservation.controller");

router
  .route("/")
  .get(tryCatchHandler(reservationController.getAllHandler))
  .all(httpMethodError);

module.exports = router;
