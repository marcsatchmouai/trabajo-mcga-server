const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database: Films ~ Online`);
  })
  .catch((e) => {
    console.error(e);
  });

// Import Models Here.

const film = require('../models/film');
const user = require('../models/user');
