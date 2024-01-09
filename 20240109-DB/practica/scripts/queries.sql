-- Cantidad de productos por formato
SELECT COUNT(p.id) AS Cantidad, f.format as Formato
FROM products p, formats f
WHERE p.id_format = f.id
GROUP BY f.format
ORDER BY Cantidad ASC;

-- Cantidad de pedidos por cliente
SELECT CONCAT(c.name, ' ', c.last_name) AS 'Nombre completo', COUNT(o.id) AS 'Cantidad pedidos'
FROM clients c, orders o
WHERE c.id = o.id_client
GROUP BY CONCAT(c.name, ' ', c.last_name);

-- Cantidad de pedidos por cliente
SELECT
    CONCAT(c.name, ' ', c.last_name) AS 'Nombre completo',
    COUNT(o.id) AS 'Cantidad pedidos'
FROM
    clients c
JOIN
    orders o ON c.id = o.id_client
GROUP BY
    CONCAT(c.name, ' ', c.last_name);

-- Cantidad de productos alquilados/vendidos
SELECT
    p.title AS Producto,
	SUM(d.cant * d.is_buy) AS Ventas,
    SUM(d.cant * (1 - d.is_buy)) AS Alquileres,
    SUM(d.cant) AS Total
FROM
    products p
JOIN
    order_details d ON d.id_product = p.id
GROUP BY
    p.title;

-- Cantidad de productos alquilados/vendidos (usando CASE)
SELECT
    p.title AS Producto,
    SUM(CASE WHEN d.is_buy = 1 THEN d.cant ELSE 0 END) AS Ventas,
    SUM(CASE WHEN d.is_buy = 0 THEN d.cant ELSE 0 END) AS Alquileres,
	SUM(d.cant) AS Total
FROM
    products p
JOIN
    order_details d ON d.id_product = p.id
GROUP BY
    p.title;

-- Top 5 de géneros más solicitados
SELECT TOP 5 g.gender AS generos, SUM(d.cant) AS cantidad
FROM genders g
JOIN products p ON p.id_gender = g.id
JOIN order_details d ON d.id_product = p.id
GROUP BY g.gender
ORDER BY cantidad DESC

-- Empleados (legajo, nombre, apellido) que trabajaron entre el 12 y 15 de Enero de 2024
-- Ordenado por fecha Z-A y legajo A-Z
SELECT e.legajo, e.name AS nombre, e.last_name AS apellido, o.date AS fecha
FROM employees e
JOIN orders o ON o.id_employee = e.id
WHERE o.date BETWEEN '2024-01-12' AND '2024-01-15'
-- WHERE o.date >= '2024-01-12' AND o.date <= '2024-01-15'
ORDER BY o.date DESC, e.legajo ASC

-- Métodos de pago utilizados por los socios, siempre que sea más de 2 veces
SELECT p.payment_method AS 'metodo de pago', COUNT(o.id_payment_method) AS 'cantidad'
FROM payment_methods p
JOIN orders o ON o.id_payment_method = p.id
JOIN clients c ON c.id = o.id_client
WHERE c.is_partner = 1
GROUP BY p.payment_method
HAVING COUNT(o.id_payment_method) > 1;

-- Clientes con misma ubicación que los empleados
SELECT name, last_name
FROM clients
WHERE id_location IN (SELECT id_location FROM employees);

-- Clientes con ubicación diferente de los empleados
SELECT name, last_name
FROM clients
WHERE id_location IN (SELECT id_location FROM employees);

-- Clientes y empleados en un sólo listado
SELECT name, last_name, 'Empleado' AS Tipo
FROM employees
UNION
SELECT name, last_name, 'Cliente' 
FROM clients

-- Ordenes (numero, fecha, total) cuyo precio total sea mayor al precio promedio de los productos
SELECT number_order AS numero, date AS fecha, total
FROM orders
WHERE total > (SELECT AVG(sale_price) FROM products);

-- Ordenes cuyo precio total sea mayor al precio promedio (venta y alquiler) de los productos
SELECT number_order AS numero, date AS fecha, total
FROM orders
WHERE total > (SELECT AVG((sale_price + rental_price) / 2) FROM products);

-- Productos con su tipo
SELECT p.title AS nombre, p.description AS descripcion, p.sale_price AS precio,
		CASE p.id_type
			WHEN 1 THEN 'Música'
			WHEN 2 THEN 'Película'
			WHEN 3 THEN 'Serie'
            ELSE 'Otro'
		END AS tipo
FROM products p;

-- Clientes con su tipo
SELECT c.name AS nombre, c.last_name AS apellido,
		CASE c.is_partner
			WHEN 1 THEN 'Socio'
			WHEN 0 THEN 'Cliente'
		END AS tipo
FROM clients c;
