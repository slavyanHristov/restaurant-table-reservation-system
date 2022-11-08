const createServer = require("./utils/server");
const env = process.env.NODE_ENV || "development";
const { server_port } = require("../config/config")[env];
const logger = require("./utils/logger");
const connect = require("./utils/connect");

const app = createServer();

const init = async () => {
  try {
    await connect.connectDatabase();
    app.listen(server_port, () => {
      logger.info(`Server is listening on PORT: ${server_port} 👂 ⬅`);
    });
  } catch (err) {
    await connect.closeConnection();
    logger.error("Error econuntered", err);
  }
};

init();
