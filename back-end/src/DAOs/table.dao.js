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

const findTableById = async (id) => {
  return await Table.findOne({
    where: {
      id: id,
    },
  });
};

const updateTable = async (table, payload) => {
  return await table.update(payload);
};

const freeTable = async (reservationDAO, table) => {
  const reservationId = table.reservationId;
  const reservation = await reservationDAO.findReservationById(reservationId);
  await updateTable(table, {
    isOccupied: false,
    reservationId: null,
  });

  return await reservation.destroy();
};

module.exports = {
  findAllTables,
  createTable,
  findTableById,
  freeTable,
};
