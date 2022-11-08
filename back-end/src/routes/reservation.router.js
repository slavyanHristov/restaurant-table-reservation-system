const express = require("express");
const router = express.Router();
const tryCatchHandler = require("../middleware/tryCatch");
const httpMethodError = require("../middleware/httpMethodError");
const reservationController = require("../controllers/reservation.controller");

router
  .route("/")
  .get(
    tryCatchHandler((req, res) => {
      return res.send("In development... 🔃");
    })
  )
  .all(httpMethodError);

module.exports = router;
