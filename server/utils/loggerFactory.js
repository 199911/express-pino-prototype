const pino = require('pino')
const loggerFactory = ({ enableLog, logLevel}) => pino({
  level: logLevel,
  enabled: enableLog,
  prettyPrint: true
});

module.exports = loggerFactory;
