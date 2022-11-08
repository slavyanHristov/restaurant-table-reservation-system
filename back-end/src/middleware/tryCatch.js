const tryCatchHandler = (routeHandler) => async (req, res, next) => {
  try {
    await routeHandler(req, res);
  } catch (err) {
    return next(err);
  }
};

module.exports = tryCatchHandler;
