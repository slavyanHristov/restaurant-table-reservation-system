const entryHandler = (req, res) => {
  return res
    .status(200)
    .send("Welcome to Restaurant Table Reservation System's API! 🎉");
};

const infoHandler = (req, res) => {
  return res.status(200).json({
    message:
      "You can learn more about the API and the whole project in the github repo! 😀",
    link: "https://github.com/slavyanHristov/restaurant-table-reservation-system",
  });
};

module.exports = {
  entryHandler,
  infoHandler,
};
