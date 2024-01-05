-- Peliculas
SELECT * FROM peliculas;

SELECT id, nombre
FROM peliculas
WHERE precio_venta > 15;

SELECT peliculas.nombre, peliculas.precio_venta, categorias.nombre
FROM peliculas, categorias
WHERE peliculas.id_categoria = categorias.id;

-- Clientes
SELECT clientes.nombre, clientes.apellido, contactos.email, pedidos.fecha AS 'fecha_pedido'
FROM clientes, contactos, pedidos
WHERE clientes.id = pedidos.id_cliente AND clientes.id_contacto = contactos.id;

SELECT clientes.nombre, clientes.apellido, provincias.nombre AS 'provincia'
FROM clientes, direcciones, provincias
WHERE clientes.id_direccion = direcciones.id AND provincias.id = direcciones.id_provincia

SELECT c.nombre, c.apellido, p.nombre AS 'provincia'
FROM clientes c, direcciones d, provincias p
WHERE c.id_direccion = d.id AND p.id = d.id_provincia

SELECT c.nombre, c.apellido, p.nombre 'provincia'
FROM clientes c, direcciones d, provincias p
WHERE c.id_direccion = d.id
AND p.id = d.id_provincia

-- Operador LIKE
SELECT c.nombre, c.apellido, p.nombre AS 'provincia'
FROM clientes c, direcciones d, provincias p
WHERE c.id_direccion = d.id
AND p.id = d.id_provincia
AND p.nombre LIKE '%Bue%'

SELECT c.nombre, c.apellido, p.nombre AS 'provincia'
FROM clientes c, direcciones d, provincias p
WHERE c.id_direccion = d.id
AND p.id = d.id_provincia
AND p.nombre LIKE '_ue%'

SELECT c.nombre, co.email
FROM clientes c, contactos co
WHERE c.id_contacto = co.id
AND c.es_socio = 1
AND co.email LIKE '%@gmail.com'

SELECT c.nombre, c.apellido, co.email, p.fecha 'fecha_pedido', p.total
FROM clientes c, contactos co, pedidos p
WHERE c.id_contacto = co.id
AND c.id = p.id_cliente
AND c.es_socio = 1
AND co.email LIKE '%@gmail.com'

SELECT c.nombre + ' ' + c.apellido 'nombre', co.email, p.fecha 'fecha_pedido', dp.precio 'total'
FROM clientes c, contactos co, pedidos p, detalle_pedidos dp
WHERE c.id_contacto = co.id
AND c.id = p.id_cliente
AND p.id = dp.id_pedido
AND c.es_socio = 1
AND co.email LIKE '%@gmail.com'

-- Funciones de agregación
SELECT c.nombre + ' ' + c.apellido 'nombre', co.email, MAX(p.fecha) 'fecha_pedido', SUM(dp.precio) 'total'
FROM clientes c, contactos co, pedidos p, detalle_pedidos dp
WHERE c.id_contacto = co.id
AND c.id = p.id_cliente
AND p.id = dp.id_pedido
AND c.es_socio = 1
AND co.email LIKE '%@gmail.com'
GROUP BY c.id, c.nombre, c.apellido, co.email;

-- ORDER BY
SELECT apellido, nombre, email
FROM clientes c
JOIN contactos co ON c.id_contacto = co.id
ORDER BY apellido ASC, nombre ASC;

-- BETWEEN...AND
SELECT *
FROM pedidos
WHERE fecha >= '2023/01/01' AND fecha <= '2025/01/01';

SELECT *
FROM pedidos
WHERE fecha BETWEEN '2023/01/01' AND '2025/01/01';

-- SELECT DISTINCT
SELECT DISTINCT p.nombre 'nombre_provincia'
FROM clientes c
JOIN direcciones d ON c.id_direccion = d.id
JOIN provincias p ON d.id_provincia = p.id;

-- Contar clientes por provincia
SELECT p.nombre 'nombre_provincia', COUNT(*) 'cantidad_clientes'
FROM clientes c
JOIN direcciones d ON c.id_direccion = d.id
JOIN provincias p ON d.id_provincia = p.id
GROUP BY p.nombre;

-- Contar clientes de Buenos Aires
SELECT p.nombre 'provincia', COUNT(c.id) 'cantidad_clientes'
FROM clientes c
JOIN direcciones d ON c.id_direccion = d.id
JOIN provincias p ON d.id_provincia = p.id
WHERE p.nombre = 'Buenos Aires'
GROUP BY p.nombre;

-- OFFSET/FETCH
FROM clientes c
ORDER BY c.nombre
OFFSET 3 ROWS
FETCH NEXT 10 ROWS ONLY;

-- TOP
SELECT DISTINCT TOP 2 PERCENT c.nombre, c.apellido
FROM clientes c
JOIN pedidos p ON c.id = p.id_cliente
WHERE c.es_socio = 1

-- Contar películas
SELECT DISTINCT COUNT(p.id) AS cantidad_peliculas
FROM peliculas p;

-- Obtener cantidad de productos comprados o alquilados por los NO socios
SELECT COUNT(dp.id_pelicula) + COUNT(dp.id_serie) + COUNT(dp.id_musica) AS cantidad_productos
FROM clientes c
JOIN pedidos p ON c.id = p.id_cliente
JOIN detalle_pedidos dp ON p.id = dp.id_pedido
WHERE c.es_socio = 0;

/*
Para sumar columnas:
SELECT SUM(dp.id_pelicula) + SUM(dp.id_serie) + SUM(dp.id_musica) AS cantidad_productos
SELECT SUM(dp.id_pelicula + dp.id_serie + dp.id_musica) AS cantidad_productos
*/

-- Promedio de ventas
SELECT ROUND(AVG(precio), 2) AS promedio_ventas
FROM detalle_pedidos dp;
