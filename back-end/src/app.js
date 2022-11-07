const createServer = require("./utils/server");
const env = process.env.NODE_ENV || "development";
const { port } = require("../config/config")[env];
const logger = require("./utils/logger");

const app = createServer();

const init = async () => {
  try {
    app.listen(port, () => {
      logger.info(`Server is listening on PORT: ${port}`);
    });
  } catch (err) {
    logger.error("Error econuntered", err);
  }
};

init();
