const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res.status(err?.status || 500).json({
    success: false,
    message: err?.message || "Something went wrong. Please try again later.",
  });
};

module.exports = errorHandler;
