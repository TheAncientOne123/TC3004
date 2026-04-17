const express = require('express');
const cors = require('cors');
const empleadosRoutes = require('./routes/empleadosRoutes');
const peliculasRoutes = require('./routes/peliculasRoutes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Rutas
app.use('/api/empleados', empleadosRoutes);
app.use('/api/peliculas', peliculasRoutes);
// Ruta de inicio
app.get('/', (req, res) => {
    res.send('API funcionando correctamente con PostgreSQL');
});
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});