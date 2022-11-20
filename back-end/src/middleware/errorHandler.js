const getErrorMessagesByColumn = require("../utils/getErrorMessages");

const errorHandler = (err, req, res, next) => {
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      success: false,
      errors: getErrorMessagesByColumn(err.errors),
    });
  }

  return res.status(err?.status || 500).json({
    success: false,
    message: err?.message || "Something went wrong. Please try again later.",
  });
};

module.exports = errorHandler;
