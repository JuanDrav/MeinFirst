require('dotenv').config({ path: `${__dirname}/.env` });
const express = require('express');
const initLoaders = require('./loaders/_init');

const { PORT } = process.env;

async function startServer() {
  const app = express();

  await initLoaders({ app });

  app.listen(PORT, () => {
    console.log(`app running in http://localhost:${PORT}`);
  });
}

startServer();
