var express = require('express');

const createRouter = ({ userController }) => {
  const router = express.Router();

  // For testing http logger
  router
    .route('/errors/:code')
    .all((req, res) => {
      const { code } = req.params;
      return res
        .status(code)
        .json({
          msg: 'Server Error'
        })
    });

  // For testing http logger
  router
    .route('/exceptions')
    .all(() => {
      throw new Error("Exception");
    })

  router
    .route('/users')
    .post((req, res) => {
      const { name } = req.body;
      if (!name) {
        req.log.info({ body: req.body }, 'Fail to create user');
        return res
          .status(400)
          .json({
            msg: 'Missing user name'
          })
      }
      const user = userController.create(name);
      req.log.info({ user }, 'Created user');
      return res.json(user);
    });

  router
    .route('/users/:userId')
    .get((req, res) => {
      const { userId } = req.params;
      const user = userController.find(userId);
      if (!user) {
        req.log.info({ body: req.body }, 'Fail to find user');
        return res
          .status(404)
          .json({
            msg: 'User not found'
          })
      }
      req.log.info({ user }, "Found user");
      return res.json(user);
    })
    .patch((req, res) => {
      const { userId } = req.params;
      const { name } = req.body;
      try {
        const user = userController.update(userId, name);
        req.log.info({ user }, "Updated user");
        return res.json(user);
      } catch (err) {
        req.log.info({ body: req.body }, 'Fail to update user');
        return res
          .status(404)
          .json({ msg: err.message });
      }
    })
    .delete((req, res) => {
      const { userId } = req.params;
      try {
        const user = userController.delete(userId);
        req.log.info({ user }, "Deleted user");
        return res.json(user);
      } catch (err) {
        req.log.info('Fail to delete user');
        return res
          .status(404)
          .json({ msg: err.message });
      }
    });
  return router;
};

module.exports = createRouter;
