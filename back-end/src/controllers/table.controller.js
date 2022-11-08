const tableService = require("../services/table");

const getAllHandler = async (req, res) => {
  const tables = await tableService.getAllTables();
  return res.status(200).json({
    success: true,
    collection: tables,
  });
};

const registerHandler = async (req, res) => {
  const { name, capacity } = req.body;
  const table = await tableService.registerTable({ name, capacity });

  return res.status(200).json({
    success: true,
    message: "Table successfully registered in the restaurant!",
    item: table,
  });
};

module.exports = {
  getAllHandler,
  registerHandler,
};
