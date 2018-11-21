const { createApp } = require('./server/index.js');
const { withUserRouter } = require('./server/routes/index.js');
const UserController = require('./server/controllers/UserController.js');

const main = () => {
  const app = createApp();

  const userController = new UserController();

  withUserRouter(app, { userController });

  app.listen(3000);
};
main();
