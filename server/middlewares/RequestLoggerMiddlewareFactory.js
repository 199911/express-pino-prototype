const pinoHttp = require('pino-http');
const uuidv4 = require('uuid/v4');

const requestLoggerMiddlewareFactory = ({ logger }) => {
  return pinoHttp({
    logger,
    // Have default ID which is increasing number per process, better use UUID
    // to avoid collection in server cluster
    genReqId: () => uuidv4(),
  });
}

module.exports = requestLoggerMiddlewareFactory;
