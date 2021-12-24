const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: 'El Id es requerido.',
    trim: true,
  },
  firstName: {
    type: String,
    required: 'El nombre es requerido.',
    trim: true,
  },
  lastName: {
    type: String,
    required: 'El nombre es requerido.',
    trim: true,
  },
  email: {
    type: String,
    required: 'El email es obligatorio',
    lowercase: true,
  },
  password: {
    type: String,
    required: 'El password es requerido',
    trim: true,
  },
});

module.exports = mongoose.model('Model', userSchema, 'user');
