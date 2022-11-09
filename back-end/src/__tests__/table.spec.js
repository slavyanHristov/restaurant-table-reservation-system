const tableService = require("../services/table");

describe("restaurant table", () => {
  it("should call findAllTables DAO method", async () => {
    const tableDAO = {
      findAllTables: jest.fn(),
    };
    await tableService.getAllTables(tableDAO);
    expect(tableDAO.findAllTables).toHaveBeenCalled();
  });
});
