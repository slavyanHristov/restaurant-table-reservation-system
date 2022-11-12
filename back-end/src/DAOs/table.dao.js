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

const freeTable = async (id) => {
  const table = await findTableById(id);
  /**
   * TODO: check if table exists first
   */
  const reservationId = table.reservationId;
  const reservation = await Reservation.findOne({
    where: {
      id: reservationId,
    },
  });
  await table.update({
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
