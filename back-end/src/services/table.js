const getAllTables = async (tableDAO) => {
  return await tableDAO.findAllTables();
};

const registerTable = async (tableDAO, { name, capacity }) => {
  return await tableDAO.createTable({ name, capacity });
};

module.exports = {
  getAllTables,
  registerTable,
};
