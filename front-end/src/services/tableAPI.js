import API from "./API";

class TableAPI {
  registerTable(tableData) {
    return API().post("/tables", tableData);
  }
  getAllTables() {
    return API().get("/tables");
  }
}

export default new TableAPI();
