const express = require("express");
const router = express.Router();
const tryCatchHandler = require("../middleware/tryCatch");
const httpMethodError = require("../middleware/httpMethodError");
const tableController = require("../controllers/table.controller");

router
  .route("/")
  .get(tryCatchHandler(tableController.getAllHandler))
  .post(tryCatchHandler(tableController.registerHandler))
  .all(httpMethodError);

router
  .route("/:tableId")
  .delete(tryCatchHandler(tableController.freeTableHandler))
  .all(httpMethodError);

module.exports = router;
