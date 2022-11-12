import API from "./API";

class TableAPI {
  registerTable(tableData) {
    return API().post("/tables", tableData);
  }
  getAllTables() {
    return API().get("/tables");
  }
  freeTable(tableId) {
    return API().delete("/tables/" + tableId);
  }
}

export default new TableAPI();
