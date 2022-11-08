const tableDAO = require("../DAOs/table.dao");

const getAllTables = async () => {
  const tables = await tableDAO.findAllTables();
  if (tables.length === 0)
    throw {
      status: 404,
      message: "No restaurant tables inserted in the database.",
    };
  return tables;
};

const registerTable = async ({ name, capacity }) => {
  if (!name || !capacity)
    throw {
      status: 403,
      message: "No table details have been passed!",
    };

  return await tableDAO.createTable({ name, capacity });
};

module.exports = {
  getAllTables,
  registerTable,
};
