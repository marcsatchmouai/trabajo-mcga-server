const express = require('express');
const router = express.Router();
const filmController = require('../controllers/film');
module.exports = () => {
  router.get('/All', filmController.getAllFilms);
  router.get('/:filmId', filmController.getFilmById);
  router.delete('/:filmId', filmController.deleteFilm);
  router.post('/', filmController.addNewFilm);
  router.put('/', filmController.updateFilm);
  return router;
};