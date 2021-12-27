const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });

const MONGO_URI ='mongodb+srv://marc:eb54PbyWseyULCN@cluster0.odm2c.mongodb.net/FilmDatabase?retryWrites=true&w=majority'

mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log(`Database: FilmDatabase ~ Online`);
  })
  .catch((e) => {
    console.error(e);
  });

// Import Models Here.

const film = require('../models/film');
const user = require('../models/user');
