INSERT INTO paises (nombre) VALUES
('Argentina'),
('Brasil'),
('Chile'),
('Colombia'),
('México');

INSERT INTO provincias (nombre, id_pais) VALUES
('Buenos Aires', 1),
('São Paulo', 2),
('Santiago', 3),
('Bogotá', 4),
('Ciudad de México', 5);

INSERT INTO direcciones (calle, numero, codigo_postal, localidad, id_provincia) VALUES
('Calle A', '123', '12345', 'Ciudad A', 1),
('Rua B', '456', '54321', 'Cidade B', 2),
('Avenida C', '789', '67890', 'Ciudad C', 3),
('Carrera D', '1011', '10987', 'Ciudad D', 4),
('Calle E', '1213', '54321', 'Ciudad E', 5),
('Calle F', '123', '12345', 'Ciudad A', 1),
('Rua G', '456', '54321', 'Cidade B', 2),
('Avenida H', '789', '67890', 'Ciudad C', 3),
('Carrera I', '1011', '10987', 'Ciudad D', 4),
('Calle J', '1213', '54321', 'Ciudad E', 5);

INSERT INTO contactos (email, telefono) VALUES
('contacto1@example.com', '+123456789'),
('contacto2@example.com', '+987654321'),
('contacto3@example.com', '+555555555'),
('contacto4@example.com', '+111111111'),
('contacto5@example.com', '+999999999'),
('contacto6@example.com', '+123456789'),
('contacto7@example.com', '+987654321'),
('contacto8@example.com', '+555555555'),
('contacto9@example.com', '+111111111'),
('contacto10@example.com', '+999999999');

INSERT INTO datos_fiscales (cuil_cuit, condicion_fiscal) VALUES
('20345678901', 'Responsable Inscripto'),
('30456789012', 'Monotributista'),
('40567890123', 'Responsable No Inscripto'),
('50678901234', 'Exento'),
('60789012345', 'No Responsable'),
('20345678901', 'Responsable Inscripto'),
('30456789012', 'Monotributista'),
('40567890123', 'Responsable No Inscripto'),
('50678901234', 'Exento'),
('60789012345', 'No Responsable');

INSERT INTO generos (nombre) VALUES
('Drama'),
('Comedia'),
('Acción'),
('Ciencia Ficción'),
('Romance');

INSERT INTO clientes (nombre, apellido, fecha_nacimiento, id_genero, dni, id_contacto, id_direccion, id_datos_fiscales) VALUES
('Cliente1', 'Apellido1', '1990-01-01', 1, '12345678', 1, 1, 1),
('Cliente2', 'Apellido2', '1985-05-15', 2, '23456789', 2, 2, 2),
('Cliente3', 'Apellido3', '1982-11-30', 3, '34567890', 3, 3, 3),
('Cliente4', 'Apellido4', '1995-03-20', 4, '45678901', 4, 4, 4),
('Cliente5', 'Apellido5', '1988-07-10', 5, '56789012', 5, 5, 5);

INSERT INTO sucursales (razon_social, id_direccion, id_contacto) VALUES
('Sucursal 1', 6, 6),
('Sucursal 2', 7, 7),
('Sucursal 3', 8, 8),
('Sucursal 4', 9, 9),
('Sucursal 5', 10, 10);

INSERT INTO empleados (nombre, apellido, fecha_nacimiento, id_genero, dni, id_contacto, id_direccion, id_datos_fiscales, id_sucursal) VALUES
('Empleado1', 'Apellido1', '1980-02-28', 1, '01234567', 6, 6, 6, 1),
('Empleado2', 'Apellido2', '1978-06-10', 2, '12345678', 7, 7, 7, 2),
('Empleado3', 'Apellido3', '1985-12-05', 3, '23456789', 8, 8, 8, 3),
('Empleado4', 'Apellido4', '1992-04-15', 4, '34567890', 9, 9, 9, 4),
('Empleado5', 'Apellido5', '1987-08-25', 5, '45678901', 10, 10, 10, 5);

INSERT INTO formatos (nombre) VALUES
('CD'),
('DVD'),
('Blu-ray');

INSERT INTO directores (nombre, apellido, nacionalidad) VALUES
('Vince', 'Gilligan', 'Estadounidense'),
('Duffer', 'Brothers', 'Estadounidense'),
('David', 'Benioff', 'Estadounidense'),
('Charlie', 'Brooker', 'Británico'),
('Jon', 'Favreau', 'Estadounidense');

INSERT INTO categorias (nombre) VALUES
('Drama'),
('Ciencia Ficción'),
('Fantasía'),
('Terror'),
('Aventura');

INSERT INTO peliculas (nombre, precio_venta, precio_alquiler, id_categoria, id_director, id_formato) VALUES
('The Shawshank Redemption', 14.99, 3.99, 1, 1, 1),
('The Godfather', 18.50, 4.99, 2, 2, 2),
('Inception', 21.99, 5.99, 3, 3, 3),
('The Shining', 16.75, 3.99, 4, 4, 2),
('Jurassic Park', 12.50, 2.99, 5, 5, 3);

INSERT INTO series (nombre, precio_venta, precio_alquiler, id_categoria, id_director, id_formato) VALUES
('Breaking Bad', 19.99, 4.99, 1, 1, 1),
('Stranger Things', 24.50, 5.99, 2, 2, 2),
('Game of Thrones', 29.99, 6.99, 3, 3, 3),
('Black Mirror', 22.75, 4.99, 4, 4, 3),
('The Mandalorian', 17.50, 3.99, 5, 5, 1);

INSERT INTO generos_musicales (nombre) VALUES
('Rock'),
('Pop'),
('Jazz'),
('Electrónica'),
('Hip Hop');

INSERT INTO bandas (nombre, apellido, nacionalidad) VALUES
('The Beatles', 'Lennon', 'Británica'),
('Queen', 'Mercury', 'Británica'),
('Pink Floyd', 'Gilmour', 'Británica'),
('Daft Punk', NULL, 'Francesa'),
('Eminem', NULL, 'Estadounidense');

INSERT INTO musicas (nombre, precio, id_genero, id_banda, id_formato) VALUES
('Hey Jude', 15.99, 1, 1, 1),
('Bohemian Rhapsody', 12.50, 2, 2, 2),
('Comfortably Numb', 10.99, 3, 3, 3),
('Get Lucky', 8.75, 4, 4, 2),
('Lose Yourself', 14.25, 5, 5, 1);

INSERT INTO clientes_peliculas (id_cliente, id_pelicula, es_compra, fecha_operacion, fecha_devolucion) VALUES
(1, 1, 1, '2023-01-01 10:00:00', '2023-01-05 15:30:00'),
(2, 2, 0, '2023-02-05 12:45:00', NULL),
(3, 3, 1, '2023-03-10 08:15:00', '2023-03-15 14:20:00'),
(4, 4, 0, '2023-04-20 16:30:00', NULL),
(5, 5, 1, '2023-05-25 09:45:00', '2023-05-30 11:10:00');

INSERT INTO clientes_series (id_cliente, id_serie, es_compra, fecha_operacion, fecha_devolucion) VALUES
(1, 1, 1, '2023-06-01 14:00:00', '2023-06-10 18:45:00'),
(2, 2, 0, '2023-07-05 20:30:00', NULL),
(3, 3, 1, '2023-08-15 11:15:00', '2023-08-20 13:25:00'),
(4, 4, 0, '2023-09-25 09:00:00', NULL),
(5, 5, 1, '2023-10-30 17:30:00', '2023-11-05 10:45:00');

INSERT INTO clientes_musicas (id_cliente, id_musica, fecha_operacion) VALUES
(1, 1, '2023-11-01 12:00:00'),
(2, 2, '2023-12-05 16:30:00'),
(3, 3, '2024-01-10 08:45:00'),
(4, 4, '2024-02-15 14:20:00'),
(5, 5, '2024-03-20 10:00:00');

INSERT INTO descuentos (descuento) VALUES
(10.00),
(15.00),
(20.00),
(25.00),
(30.00);

INSERT INTO estados (nombre) VALUES
('Pendiente'),
('En Proceso'),
('Enviado'),
('Entregado'),
('Cancelado');

INSERT INTO pedidos (fecha, total, id_estado, id_cliente, id_descuento) VALUES
('2024-09-01 14:00:00', 120.50, 1, 1, 1),
('2024-10-05 20:30:00', 180.75, 2, 2, 2),
('2024-11-15 11:15:00', 200.00, 3, 3, 3),
('2024-12-25 09:00:00', 90.25, 4, 4, 4),
('2025-01-30 17:30:00', 150.75, 5, 5, 5);

INSERT INTO medios_de_pago (nombre) VALUES
('Efectivo'),
('Tarjeta de Débito'),
('Tarjeta de Crédito'),
('Transferencia Bancaria'),
('Crypto');

INSERT INTO facturas (fecha_emision, total, id_pedido, id_medio_de_pago) VALUES
('2024-04-01 10:00:00', 150.50, 1, 1),
('2024-05-05 12:45:00', 200.75, 2, 2),
('2024-06-10 08:15:00', 180.00, 3, 3),
('2024-07-20 16:30:00', 120.25, 4, 4),
('2024-08-25 09:45:00', 90.75, 5, 5);

INSERT INTO monedas (nombre) VALUES
('Peso Argentino'),
('Real Brasileño'),
('Peso Chileno'),
('Peso Colombiano'),
('Peso Mexicano');

INSERT INTO regalos (nombre) VALUES
('Cupón de Descuento 10%'),
('Cupón de Descuento 20%'),
('Cupón de Descuento 30%'),
('Cupón de Descuento 40%'),
('Cupón de Descuento 50%');

INSERT INTO detalle_pedidos (fecha, precio, id_pedido, id_pelicula, id_serie, id_musica) VALUES
('2025-02-01 12:00:00', 25.50, 1, 1, 1, 1),
('2025-03-05 16:30:00', 40.25, 2, 2, 2, 2),
('2025-04-10 08:45:00', 50.00, 3, 3, 3, 3),
('2025-05-15 14:20:00', 30.25, 4, 4, 4, 4),
('2025-06-20 10:00:00', 15.75, 5, 5, 5, 5);

INSERT INTO sucursales_musicas (id_sucursal, id_musica) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO sucursales_series (id_sucursal, id_serie) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO sucursales_peliculas (id_sucursal, id_pelicula) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);
