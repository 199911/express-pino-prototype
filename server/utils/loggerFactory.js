const pino = require('pino')
const loggerFactory = ({ enableLog, logLevel, enablePrettyLog}) => pino({
  level: logLevel,
  enabled: enableLog,
  prettyPrint: enablePrettyLog,
});

module.exports = loggerFactory;
