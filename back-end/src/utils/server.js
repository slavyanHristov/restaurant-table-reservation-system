const express = require("express");
const helmet = require("helmet");

const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use(helmet());
  app.use(require("../routes"));
  return app;
};

module.exports = createServer;
