module.exports = {
  client: 'sqlite3',
  connection: {
    filename: '../MeinFirst.db',
  },
  migrations: {
    directory: '../loaders/migrations',
    tableName: '_migrations',
  },
};
