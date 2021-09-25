const knex = require('knex');

const sqlDB = knex({
  client: 'sqlite3',
  connection: {
    filename: './MeinFirst.db',
  },
});

module.exports = sqlDB;
