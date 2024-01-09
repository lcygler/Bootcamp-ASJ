-- Mostrar todos los registros de las tablas
SELECT * FROM album;
SELECT * FROM artista;
SELECT * FROM canciones;
SELECT * FROM discografica;

-- 1. Listar todos los artistas por discográfica, ordenados por el nombre del artista
SELECT a.nombre AS artista, d.nombre AS discografica
FROM artista a
JOIN discografica d ON a.discografica_id = d.id 
ORDER BY a.nombre ASC;

-- 2. Qué discográfica NO tiene artistas?
SELECT DISTINCT d.id, d.nombre AS discografica
FROM discografica d
WHERE d.id NOT IN (
    SELECT discografica_id
    FROM artista
);

-- 3. Listar el número de canciones por artista en orden descendente
SELECT a.nombre AS artista, COUNT(*) AS cant_canciones
FROM canciones c
JOIN album al ON c.album_id = al.id
JOIN artista a ON al.artista_id = a.id
GROUP BY a.nombre
ORDER BY a.nombre DESC;

-- 4. Qué artista grabó el mayor numero de canciones?
SELECT TOP 1 a.nombre as artista, COUNT(*) as cant_canciones
FROM canciones c
JOIN album al ON c.album_id = al.id
JOIN artista a ON al.artista_id = a.id
GROUP BY a.nombre
ORDER BY cant_canciones DESC;

-- 5. Por cada artista y cada album, cuántas canciones tienen menos de 5 minutos de duración?
SELECT a.nombre AS artista, al.nombre AS album, COUNT(*) AS cant_canciones
FROM canciones c
JOIN album al ON c.album_id = al.id
JOIN artista a ON al.artista_id = a.id
WHERE c.duracion < 5
GROUP BY a.nombre, al.nombre;

-- 6. En relación con la consulta anterior, muestra también las canciones y su duración
SELECT a.nombre AS artista, al.nombre AS album, c.nombre AS cancion, ROUND(c.duracion, 2) AS duracion
FROM canciones c
JOIN album al ON c.album_id = al.id
JOIN artista a ON al.artista_id = a.id
WHERE c.duracion < 5
ORDER BY a.nombre ASC;

-- 7. Qué artistas grabaron canciones más largas que 5 minutos, y cuántas canciones fueron?
SELECT a.nombre AS artista, COUNT(*) AS cant_canciones
FROM canciones c
JOIN album al ON c.album_id = al.id
JOIN artista a ON al.artista_id = a.id
WHERE c.duracion > 5
GROUP BY a.nombre;

-- 8. En que año se grabaron la mayoría de las canciones?
SELECT TOP 1 al.anio, COUNT(*) AS cant_canciones
FROM canciones c
JOIN album al ON c.album_id = al.id
GROUP BY al.anio
ORDER BY cant_canciones DESC;

-- 9. Mostrar el ranking de los 5 artistas, album, canción y año con las canciones más largas
SELECT TOP 5 a.nombre AS artista, al.nombre AS album, al.anio, c.duracion
FROM canciones c
JOIN album al ON c.album_id = al.id
JOIN artista a ON al.artista_id = a.id
ORDER BY c.duracion DESC;

-- 10. Duración total de todas las canciones grabadas por cada artista en orden descendente
SELECT a.nombre AS artista, ROUND(SUM(c.duracion), 2) AS duracion
FROM canciones c
JOIN album al ON c.album_id = al.id
JOIN artista a ON al.artista_id = a.id
GROUP BY a.nombre
ORDER BY duracion DESC;

-- 11. Qué artistas y album no tienen canciones de menos de 5 minutos?
SELECT a.nombre AS artista, al.nombre AS album
FROM artista a
JOIN album al ON a.id = al.artista_id
LEFT JOIN canciones c ON al.id = c.album_id AND c.duracion < 5
WHERE c.id IS NULL
GROUP BY a.nombre, al.nombre;

-- 12. Mostrar el top 3 de artistas con el promedio de duración de las canciones
-- En orden descendente con la canción más larga primero
SELECT TOP 3 a.nombre AS artista, ROUND(AVG(c.duracion), 2) AS promedio
FROM canciones c
JOIN album al ON c.album_id = al.id
JOIN artista a ON al.artista_id = a.id
GROUP BY a.nombre
ORDER BY promedio DESC;

-- 13. Qué artistas no lanzaron un album durante la decada de 1980 y 1990?
SELECT DISTINCT a.nombre AS artista
FROM artista a
JOIN album al ON a.id = al.artista_id
WHERE al.anio < 1980 OR al.anio > 1999;

-- 14. Duración total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)
SELECT al.nombre AS album,
		FLOOR(SUM(c.duracion)) AS minutos,
		CEILING((SUM(c.duracion) - FLOOR(SUM(c.duracion))) * 60) AS segundos
FROM album AS al, canciones c
WHERE al.id = c.album_id
AND al.id = 13
GROUP BY al.nombre;
