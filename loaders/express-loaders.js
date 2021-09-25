const bodyParser = require('body-parser');

const router = require('../routers/router');

module.exports = ({ app }) => {
  app.use(bodyParser.json({}));
  app.use('/', router);
};
