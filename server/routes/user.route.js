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
        return res
          .status(404)
          .json({
            msg: 'User not found'
          })
      }
      return res.json(user);
    })
    .patch((req, res) => {
      const { userId } = req.params;
      const { name } = req.body;
      try {
        const user = userController.update(userId, name);
        res.json(user);
      } catch (err) {
        return res
          .status(404)
          .json({ msg: err.message });
      }
    })
    .delete((req, res) => {
      const { userId } = req.params;
      try {
        const user = userController.delete(userId);
        res.json(user);
      } catch (err) {
        return res
          .status(404)
          .json({ msg: err.message });
      }
    });
  return router;
};

module.exports = createRouter;
