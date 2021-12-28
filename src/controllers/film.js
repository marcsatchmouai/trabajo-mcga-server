const Film = require('../models/film');

// Agregar nuevo Pelicula
exports.addNewFilm = async (req, res) => {
  try {
    const body = req.body;
    const film = new Film(body);

    if (!film) return res.status(400).json('Error al crear la pelicula.');

    await film.save();
    return res.status(200).json(film);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar Pelicula
exports.updateFilm = async (req, res) => {
  try {
    const body = req.body;

    if (!body._id)
      return res.status(400).json('No existe la pelicula con ese Id.');

    const film = await Film.findByIdAndUpdate(body._id, body, {
      new: true,
    });

    if (!film) return res.status(400).json('Error al actualizar la pelicula.');

    return res.status(200).json(film);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar pelicula
exports.deleteFilm = async (req, res) => {
  try {
    const { filmId } = req.params;
    const film = await Film.findByIdAndDelete(filmId);

    if (!film) return res.status(400).json('Error al eliminar la pelicula.');

    return res.status(200).json('La pelicula ha sido eliminada correctamente.');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Listar todos las Peliculas
exports.getAllFilms = async (req, res) => {
  try {
    const films = await Film.find();

    if (films.length === 0)
      return res.status(400).json('No se han encontrado peliculas.');

    return res.status(200).json(films);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

// Obtener Pelicula por Id.
exports.getFilmById = async (req, res) => {
  try {
    const { filmId } = req.params;
    const film = await Film.findById(filmId);

    if (!film) return res.status(400).json('No existe pelicula con ese Id.');

    return res.status(200).json(film);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

