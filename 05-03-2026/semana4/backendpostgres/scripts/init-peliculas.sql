-- Ejecutar en tu base de datos PostgreSQL (ej. bdpaises)
-- Crea la tabla peliculas para la API de películas

CREATE TABLE IF NOT EXISTS peliculas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    director VARCHAR(255),
    anio INTEGER
);

-- Datos de ejemplo (opcional)
INSERT INTO peliculas (titulo, director, anio) VALUES
    ('El Padrino', 'Francis Ford Coppola', 1972),
    ('Pulp Fiction', 'Quentin Tarantino', 1994),
    ('El Señor de los Anillos: La Comunidad', 'Peter Jackson', 2001),
    ('Forrest Gump', 'Robert Zemeckis', 1994),
    ('Inception', 'Christopher Nolan', 2010)
;
