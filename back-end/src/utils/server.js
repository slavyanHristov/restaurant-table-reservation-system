const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(require("../routes"));
  return app;
};

module.exports = createServer;
