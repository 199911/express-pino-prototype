const express = require('express');
const bodyParser = require('body-parser');

const createApp = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
};

module.exports = { createApp };

