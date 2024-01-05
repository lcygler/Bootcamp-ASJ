-- Peliculas
DELETE FROM peliculas WHERE id = 5;

-- SQL Server
DELETE TOP (1) -- Eliminar sólo el primer encontrado
FROM peliculas
WHERE name = "Harry Potter";

-- MySQL, SQLite, PostgreSQL
DELETE FROM peliculas
WHERE name = "Harry Potter"
LIMIT 1; -- Eliminar sólo el primer encontrado

DELETE FROM peliculas
WHERE name = "Harry Potter"
LIMIT 10 OFFSET 5; -- Eliminar hasta 10 filas, omitiendo las primeras 5
