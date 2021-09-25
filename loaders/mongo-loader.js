const mongoosefile = require('../utils/mongoosefile');

module.exports = async () => {
  const mongooseConection = await mongoosefile();

  return mongooseConection.connection.db;
};
