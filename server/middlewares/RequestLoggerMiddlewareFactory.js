const pinoHttp = require('pino-http');
const uuidv4 = require('uuid/v4');

const requestLoggerMiddlewareFactory = ({ logger }) => {
  return pinoHttp({
    logger,
    // Have default ID which is increasing number per process, better use UUID
    // to avoid collection in server cluster
    genReqId: () => uuidv4(),
    customLogLevel: function (res, err) {
      if (err) {
        // No idea when will have err returned, as we should handle all exception
        return 'fatal';
      }
      if (res.statusCode >= 500) {
        return 'error';
      }
      if (res.statusCode >= 400) {
        return 'warn'
      }
      return 'info'
    }
  });
}

module.exports = requestLoggerMiddlewareFactory;
