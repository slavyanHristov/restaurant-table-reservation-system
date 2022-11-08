const notFound = (req, res, next) => {
  next({
    status: 404,
    message: `API endpoint doesn't exist: ${req.originalUrl}`,
  });
};

module.exports = notFound;
