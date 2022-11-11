const db = require("../db/models");
const Table = db.table;
const Reservation = db.reservation;

const findAllTables = async () => {
  return await Table.findAll({
    include: [
      {
        model: Reservation,
      },
    ],
  });
};

const createTable = async ({ name, capacity }) => {
  return await Table.create({
    name: name,
    capacity: capacity,
  });
};

module.exports = {
  findAllTables,
  createTable,
};
