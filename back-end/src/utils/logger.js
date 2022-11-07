const { createLogger, transports, format } = require("winston");

const LEVEL = Symbol.for("level");

const customFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf((info) => {
    return `${info.timestamp} - [${info.level.toUpperCase()}] - ${
      info.message
    }`;
  })
);

const filterOnly = (level) => {
  return format((info) => {
    if (info[LEVEL] === level) return info;
  })();
};

const logger = createLogger({
  level: "debug",
  format: customFormat,
  transports: [
    new transports.Console(),
    new transports.File({
      level: "error",
      format: filterOnly("error"),
      filename: "logs/error.log",
    }),
    new transports.File({
      level: "info",
      format: filterOnly("info"),
      filename: "logs/info.log",
    }),
    new transports.File({
      level: "warn",
      format: filterOnly("warn"),
      filename: "logs/warn.log",
    }),
  ],
});

module.exports = logger;
