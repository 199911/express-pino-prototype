const config = require('./config.js');
const { createApp } = require('./server/index.js');

const loggerFactory = require('./server/utils/loggerFactory.js');

const requestLoggerMiddlewareFactory = require('./server/middlewares/requestLoggerMiddlewareFactory.js');

const { withUserRouter } = require('./server/routes/index.js');

const UserController = require('./server/controllers/UserController.js');

const main = () => {
  const app = createApp();

  const logger = loggerFactory(config);

  const requestLoggerMiddleware = requestLoggerMiddlewareFactory({ logger });

  const userController = new UserController({ logger });

  app.use(requestLoggerMiddleware);

  withUserRouter(app, { userController });

  app.listen(3000);
};
main();
