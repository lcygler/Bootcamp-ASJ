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

SELECT c.nombre + ' ' + c.apellido 'nombre', co.email, MAX(p.fecha) 'fecha_pedido', SUM(dp.precio) 'total'
FROM clientes c, contactos co, pedidos p, detalle_pedidos dp
WHERE c.id_contacto = co.id
AND c.id = p.id_cliente
AND p.id = dp.id_pedido
AND c.es_socio = 1
AND co.email LIKE '%@gmail.com'
GROUP BY c.id, c.nombre, c.apellido, co.email;
