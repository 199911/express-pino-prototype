const pinoHttp = require('pino-http');

const requestLoggerMiddlewareFactory = ({ logger }) => {
  return pinoHttp({
    logger
  });
}

module.exports = requestLoggerMiddlewareFactory;
