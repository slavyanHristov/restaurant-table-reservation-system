import API from "./API";

class TableAPI {
  registerTable(tableData) {
    return API().post("/tables", tableData);
  }
}

export default new TableAPI();
