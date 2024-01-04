CREATE TABLE peliculas (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  precio_venta float,
  precio_alquiler float,
  id_categoria int,
  id_director int,
  id_formato int
)

CREATE TABLE categorias (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255)
)

CREATE TABLE directores (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  apellido varchar(255),
  nacionalidad varchar(255)
)

CREATE TABLE formatos (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255)
)

CREATE TABLE series (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  precio_venta float,
  precio_alquiler float,
  id_categoria int,
  id_director int,
  id_formato int
)

CREATE TABLE musicas (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  precio float,
  id_genero int,
  id_banda int,
  id_formato int
)

CREATE TABLE generos_musicales (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255)
)

CREATE TABLE bandas (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  apellido varchar(255),
  nacionalidad varchar(255)
)

CREATE TABLE sucursales (
  id int PRIMARY KEY IDENTITY(1, 1),
  razon_social varchar(255) UNIQUE NOT NULL,
  id_contacto int,
  id_direccion int,
  id_datos_fiscales int
)

CREATE TABLE sucursales_peliculas (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_sucursal int,
  id_pelicula int
)

CREATE TABLE sucursales_series (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_sucursal int,
  id_serie int
)

CREATE TABLE sucursales_musicas (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_sucursal int,
  id_musica int
)

CREATE TABLE clientes_peliculas (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_cliente int,
  id_pelicula int,
  es_compra bit,
  fecha_operacion datetime,
  fecha_devolucion datetime
)

CREATE TABLE clientes_series (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_cliente int,
  id_series int,
  es_compra bit,
  fecha_operacion datetime,
  fecha_devolucion datetime
)

CREATE TABLE clientes_musicas (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_cliente int,
  id_musica int,
  fecha_operacion datetime
)

CREATE TABLE empleados (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  apellido varchar(255),
  fecha_nacimiento date,
  id_genero int,
  dni varchar(255),
  id_contacto int,
  id_direccion int,
  id_datos_fiscales int,
  id_sucursal int
)

CREATE TABLE clientes (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  apellido varchar(255),
  fecha_nacimiento date,
  id_genero int,
  dni varchar(255),
  id_contacto int,
  id_direccion int,
  id_datos_fiscales int
)

CREATE TABLE generos (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255)
)

CREATE TABLE direcciones (
  id int PRIMARY KEY IDENTITY(1, 1),
  calle varchar(255),
  numero varchar(255),
  codi_postal varchar(255),
  localidad varchar(255),
  id_provincia int
)

CREATE TABLE provincias (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  id_pais int
)

CREATE TABLE paises (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255)
)

CREATE TABLE contactos (
  id int PRIMARY KEY IDENTITY(1, 1),
  email varchar(255),
  telefono varchar(255)
)

CREATE TABLE datos_fiscales (
  id int PRIMARY KEY IDENTITY(1, 1),
  cuil_cuit varchar(255),
  condicion_fiscal varchar(255)
)

CREATE TABLE detalle_pedidos (
  id int PRIMARY KEY IDENTITY(1, 1),
  fecha datetime,
  precio float,
  id_pedido int,
  id_pelicula int,
  id_serie int,
  id_musica int
)

CREATE TABLE pedidos (
  id int PRIMARY KEY IDENTITY(1, 1),
  fecha datetime,
  total float,
  id_estado int,
  id_cliente int,
  id_descuento int
)

CREATE TABLE estados (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255)
)

CREATE TABLE descuentos (
  id int PRIMARY KEY IDENTITY(1, 1),
  descuento float
)

CREATE TABLE regalos (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255)
)

CREATE TABLE facturas (
  id int PRIMARY KEY IDENTITY(1, 1),
  fecha_emision datetime,
  total float,
  id_pedido int,
  id_medio_de_pago int
)

CREATE TABLE medios_de_pago (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255)
)

CREATE TABLE monedas (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255)
)

ALTER TABLE peliculas ADD FOREIGN KEY (id_categoria) REFERENCES categorias (id)

ALTER TABLE peliculas ADD FOREIGN KEY (id_director) REFERENCES directores (id)

ALTER TABLE peliculas ADD FOREIGN KEY (id_formato) REFERENCES formatos (id)

ALTER TABLE series ADD FOREIGN KEY (id_categoria) REFERENCES categorias (id)

ALTER TABLE series ADD FOREIGN KEY (id_director) REFERENCES directores (id)

ALTER TABLE series ADD FOREIGN KEY (id_formato) REFERENCES formatos (id)

ALTER TABLE musicas ADD FOREIGN KEY (id_genero) REFERENCES generos (id)

ALTER TABLE musicas ADD FOREIGN KEY (id_banda) REFERENCES bandas (id)

ALTER TABLE musicas ADD FOREIGN KEY (id_formato) REFERENCES formatos (id)

ALTER TABLE sucursales ADD FOREIGN KEY (id_contacto) REFERENCES contactos (id)

ALTER TABLE sucursales ADD FOREIGN KEY (id_direccion) REFERENCES direcciones (id)

ALTER TABLE sucursales ADD FOREIGN KEY (id_datos_fiscales) REFERENCES datos_fiscales (id)

ALTER TABLE sucursales_peliculas ADD FOREIGN KEY (id_sucursal) REFERENCES sucursales (id)

ALTER TABLE sucursales_peliculas ADD FOREIGN KEY (id_pelicula) REFERENCES peliculas (id)

ALTER TABLE sucursales_series ADD FOREIGN KEY (id_sucursal) REFERENCES sucursales (id)

ALTER TABLE sucursales_series ADD FOREIGN KEY (id_serie) REFERENCES series (id)

ALTER TABLE sucursales_musicas ADD FOREIGN KEY (id_sucursal) REFERENCES sucursales (id)

ALTER TABLE sucursales_musicas ADD FOREIGN KEY (id_musica) REFERENCES musicas (id)

ALTER TABLE clientes_peliculas ADD FOREIGN KEY (id_cliente) REFERENCES clientes (id)

ALTER TABLE clientes_peliculas ADD FOREIGN KEY (id_pelicula) REFERENCES peliculas (id)

ALTER TABLE clientes_series ADD FOREIGN KEY (id_cliente) REFERENCES clientes (id)

ALTER TABLE clientes_series ADD FOREIGN KEY (id_series) REFERENCES series (id)

ALTER TABLE clientes_musicas ADD FOREIGN KEY (id_cliente) REFERENCES clientes (id)

ALTER TABLE clientes_musicas ADD FOREIGN KEY (id_musica) REFERENCES musicas (id)

ALTER TABLE empleados ADD FOREIGN KEY (id_genero) REFERENCES generos (id)

ALTER TABLE empleados ADD FOREIGN KEY (id_contacto) REFERENCES contactos (id)

ALTER TABLE empleados ADD FOREIGN KEY (id_direccion) REFERENCES direcciones (id)

ALTER TABLE empleados ADD FOREIGN KEY (id_datos_fiscales) REFERENCES datos_fiscales (id)

ALTER TABLE empleados ADD FOREIGN KEY (id_sucursal) REFERENCES sucursales (id)

ALTER TABLE clientes ADD FOREIGN KEY (id_genero) REFERENCES generos (id)

ALTER TABLE clientes ADD FOREIGN KEY (id_contacto) REFERENCES contactos (id)

ALTER TABLE clientes ADD FOREIGN KEY (id_direccion) REFERENCES direcciones (id)

ALTER TABLE clientes ADD FOREIGN KEY (id_datos_fiscales) REFERENCES datos_fiscales (id)

ALTER TABLE direcciones ADD FOREIGN KEY (id_provincia) REFERENCES provincias (id)

ALTER TABLE provincias ADD FOREIGN KEY (id_pais) REFERENCES paises (id)

ALTER TABLE detalle_pedidos ADD FOREIGN KEY (id_pedido) REFERENCES pedidos (id)

ALTER TABLE detalle_pedidos ADD FOREIGN KEY (id_pelicula) REFERENCES peliculas (id)

ALTER TABLE detalle_pedidos ADD FOREIGN KEY (id_serie) REFERENCES series (id)

ALTER TABLE detalle_pedidos ADD FOREIGN KEY (id_musica) REFERENCES musicas (id)

ALTER TABLE pedidos ADD FOREIGN KEY (id_estado) REFERENCES estados (id)

ALTER TABLE pedidos ADD FOREIGN KEY (id_cliente) REFERENCES clientes (id)

ALTER TABLE pedidos ADD FOREIGN KEY (id_descuento) REFERENCES descuentos (id)

ALTER TABLE facturas ADD FOREIGN KEY (id_pedido) REFERENCES pedidos (id)

ALTER TABLE facturas ADD FOREIGN KEY (id_medio_de_pago) REFERENCES medios_de_pago (id)
