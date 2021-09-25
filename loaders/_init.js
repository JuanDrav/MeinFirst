const expressLoaders = require('./express-loaders');
const mongoLoader = require('./mongo-loader');

module.exports = async ({ app }) => {
  expressLoaders({ app });
  await mongoLoader();
};
