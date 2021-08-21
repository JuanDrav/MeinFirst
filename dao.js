const sqlite3 = require('sqlite3');
const Promise = require('bluebird');

class AppDAO {
  constructor(dbFilePath) {
    this.db = new sqlite3.Database(dbFilePath, (err) => {
      if (err) {
        console.log('Couldnt connect to database', err);
      } else {
        console.log('connected to database');
      }
    });
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, ((err, result) => {
        if (err) {
          console.log('error running sql', err);
          reject(err);
        } else {
          resolve(result);
        }
      }));
    });
  }

  getAll(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, ((err, result) => {
        if (err) {
          console.log('error running sql', err);
          reject(err);
        } else {
          resolve(result);
        }
      }));
    });
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, ((err, result) => {
        if (err) {
          console.log('error running sql', err);
          reject(err);
        } else {
          resolve(result);
        }
      }));
    });
  }
}

module.exports = AppDAO;
