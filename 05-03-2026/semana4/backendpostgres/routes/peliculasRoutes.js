const express = require('express');
const peliculasController = require('../controllers/peliculasController');
const router = express.Router();

router.get('/', peliculasController.getAllPeliculas);
router.get('/:id', peliculasController.getPeliculaById);
router.post('/', peliculasController.createPelicula);
router.put('/:id', peliculasController.updatePelicula);
router.delete('/:id', peliculasController.deletePelicula);

module.exports = router;
