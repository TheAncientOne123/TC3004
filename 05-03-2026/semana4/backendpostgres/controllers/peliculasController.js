const pool = require('../db');

exports.getAllPeliculas = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM peliculas ORDER BY anio DESC, titulo');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener las películas:', error);
        res.status(500).json({ error: 'Error al obtener las películas' });
    }
};

exports.getPeliculaById = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM peliculas WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al obtener la película:', error);
        res.status(500).json({ error: 'Error al obtener la película' });
    }
};

exports.createPelicula = async (req, res) => {
    const { titulo, director, anio } = req.body;
    if (!titulo || !titulo.trim()) {
        return res.status(400).json({ error: 'El título es obligatorio' });
    }
    try {
        const result = await pool.query(
            'INSERT INTO peliculas (titulo, director, anio) VALUES ($1, $2, $3) RETURNING *',
            [titulo.trim(), director || null, anio ? parseInt(anio, 10) : null]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error al crear la película:', error);
        res.status(500).json({ error: 'Error al crear la película' });
    }
};

exports.updatePelicula = async (req, res) => {
    const { titulo, director, anio } = req.body;
    const id = req.params.id;
    if (!titulo || !titulo.trim()) {
        return res.status(400).json({ error: 'El título es obligatorio' });
    }
    try {
        const check = await pool.query('SELECT * FROM peliculas WHERE id = $1', [id]);
        if (check.rows.length === 0) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }
        const result = await pool.query(
            'UPDATE peliculas SET titulo = $1, director = $2, anio = $3 WHERE id = $4 RETURNING *',
            [titulo.trim(), director || null, anio ? parseInt(anio, 10) : null, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar la película:', error);
        res.status(500).json({ error: 'Error al actualizar la película' });
    }
};

exports.deletePelicula = async (req, res) => {
    const id = req.params.id;
    try {
        const check = await pool.query('SELECT * FROM peliculas WHERE id = $1', [id]);
        if (check.rows.length === 0) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }
        await pool.query('DELETE FROM peliculas WHERE id = $1', [id]);
        res.json({ message: 'Película eliminada con éxito' });
    } catch (error) {
        console.error('Error al eliminar la película:', error);
        res.status(500).json({ error: 'Error al eliminar la película' });
    }
};
