const tableService = require("../services/tableService");
const tableDAO = require("../DAOs/table.dao");
const reservationDAO = require("../DAOs/reservation.dao");

const getAllHandler = async (req, res) => {
  const tables = await tableService.getAllTables(tableDAO);

  if (tables.length === 0)
    throw {
      status: 404,
      message: "No restaurant tables inserted in the database.",
    };

  return res.status(200).json({
    success: true,
    collection: tables,
  });
};

const registerHandler = async (req, res) => {
  const { name, capacity } = req.body;

  if (!name && !capacity)
    throw {
      status: 400,
      message: "Please fill in all fields!",
    };

  const table = await tableService.registerTable(tableDAO, {
    name,
    capacity,
  });

  return res.status(201).json({
    success: true,
    message: "Table successfully registered in the restaurant!",
    item: table,
  });
};

const freeTableHandler = async (req, res) => {
  const tableId = req.params.tableId;
  const info = await tableService.freeTable(
    { reservationDAO, tableDAO },
    tableId
  );

  return res.status(200).json({
    success: true,
    message: "Successfully freed the chosen table!",
    item: info,
  });
};

module.exports = {
  getAllHandler,
  registerHandler,
  freeTableHandler,
};
