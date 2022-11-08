const db = require("../db/models");
const Table = db.Table;

const findAllTables = async () => {
  return await Table.findAll();
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
