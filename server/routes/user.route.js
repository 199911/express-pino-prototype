var express = require('express');

const createRouter = ({ userController }) => {
  const router = express.Router();

  router
    .route('/users')
    .post((req, res) => {
      const { name } = req.body;
      const user = userController.create(name);
      res.json(user);
    });

  router
    .route('/users/:userId')
    .get((req, res) => {
      const { userId } = req.params;
      const user = userController.find(userId);
      res.json(user);
    })
    .patch((req, res) => {
      const { userId } = req.params;
      const { name } = req.body;
      const user = userController.update(userId, name);
      res.json(user);
    })
    .delete((req, res) => {
      const { userId } = req.params;
      userController.delete(userId);
      res.json({});
    });
  return router;
};

module.exports = createRouter;
