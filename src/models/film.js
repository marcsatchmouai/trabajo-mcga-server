const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: 'El Id es requerido.',
    trim: true,
  },
  titulo: {
    type: String,
    required: 'El titulo es requerido.',
    trim: true,
  },
  genero: {
    type: String,
    required: 'El genero es requerido.',
    trim: true,
  },
  anio: {
    type: Date,
    required: 'El año es requerido.',
    trim: true,
  },
  duracion: {
    type: String,
    required: 'La duracion es requerida.',
    trim: true,
  },
  director: {
    type: Date,
    required: 'El director es requerido.',
    trim: true,
  }
  
});

module.exports = mongoose.model('film', filmSchema);