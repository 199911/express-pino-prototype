const config = require('./config.js');
const { createApp } = require('./server/index.js');
const { withUserRouter } = require('./server/routes/index.js');
const UserController = require('./server/controllers/UserController.js');
const loggerFactory = require('./server/utils/loggerFactory.js');

const main = () => {
  const app = createApp();

  const logger = loggerFactory(config);

  const userController = new UserController({ logger });

  withUserRouter(app, { userController });

  app.listen(3000);
};
main();
