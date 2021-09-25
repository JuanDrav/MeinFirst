const mongoose = require('mongoose');

let Mongoose = null;

module.exports = async () => {
  if (!Mongoose) {
    Mongoose = mongoose;

    await Mongoose.connect('mongodb://localhost:27017/ProjectOne', {
      useUnifiedTopology: true,
      keepAlive: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      connectTimeoutMS: 10000,
    }, async (error, response) => {
      if (error) {
        console.log(`Error connecting in database: ${error}`);
      }

      return response;
    });
    Mongoose.set('bufferCommands', false);
    Mongoose.set('useCreateIndex', true);
    Mongoose.set('debug', (collectionName, method, query, doc) => {
      console.log(`${collectionName}.${method}`, JSON.stringify(query), JSON.stringify(doc));
    });
  }

  return Mongoose;
};
