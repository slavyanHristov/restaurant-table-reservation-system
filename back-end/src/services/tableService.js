const getAllTables = async (tableDAO) => {
  return await tableDAO.findAllTables();
};

const registerTable = async (tableDAO, { name, capacity }) => {
  return await tableDAO.createTable({ name, capacity });
};

const freeTable = async (tableDAO, tableId) => {
  return await tableDAO.freeTable(tableId);
};

module.exports = {
  getAllTables,
  registerTable,
  freeTable,
};
