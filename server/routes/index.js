const createUserRouter = require('./user.route.js');

const withUserRouter = (router, { userController }) => {
  const userRouter = createUserRouter({ userController });
  router.use('/', userRouter);
  return router;
};

module.exports = {
  withUserRouter,
}
