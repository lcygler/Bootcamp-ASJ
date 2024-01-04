CREATE TABLE peliculas (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  precio_venta float,
  precio_alquiler float,
  id_categoria int,
  id_director int,
  id_formato int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE categorias (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE directores (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  apellido varchar(255),
  nacionalidad varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE formatos (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE series (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  precio_venta float,
  precio_alquiler float,
  id_categoria int,
  id_director int,
  id_formato int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE musicas (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  precio float,
  id_genero int,
  id_banda int,
  id_formato int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE generos_musicales (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE bandas (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  apellido varchar(255),
  nacionalidad varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE sucursales (
  id int PRIMARY KEY IDENTITY(1, 1),
  razon_social varchar(255) UNIQUE NOT NULL,
  id_contacto int,
  id_direccion int,
  id_datos_fiscales int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE sucursales_peliculas (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_sucursal int,
  id_pelicula int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE sucursales_series (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_sucursal int,
  id_serie int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE sucursales_musicas (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_sucursal int,
  id_musica int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE clientes_peliculas (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_cliente int,
  id_pelicula int,
  es_compra bit,
  fecha_operacion datetime,
  fecha_devolucion datetime,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE clientes_series (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_cliente int,
  id_serie int,
  es_compra bit,
  fecha_operacion datetime,
  fecha_devolucion datetime,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE clientes_musicas (
  id int PRIMARY KEY IDENTITY(1, 1),
  id_cliente int,
  id_musica int,
  fecha_operacion datetime,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
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
  id_sucursal int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE clientes (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  apellido varchar(255),
  fecha_nacimiento date,
  id_genero int,
  dni varchar(255),
  es_socio bit,
  id_contacto int,
  id_direccion int,
  id_datos_fiscales int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE generos (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE direcciones (
  id int PRIMARY KEY IDENTITY(1, 1),
  calle varchar(255),
  numero varchar(255),
  codigo_postal varchar(255),
  localidad varchar(255),
  id_provincia int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE provincias (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  id_pais int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE paises (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE contactos (
  id int PRIMARY KEY IDENTITY(1, 1),
  email varchar(255),
  telefono varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE datos_fiscales (
  id int PRIMARY KEY IDENTITY(1, 1),
  cuil_cuit varchar(255),
  condicion_fiscal varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE detalle_pedidos (
  id int PRIMARY KEY IDENTITY(1, 1),
  fecha datetime,
  precio float,
  id_pedido int,
  id_pelicula int,
  id_serie int,
  id_musica int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE pedidos (
  id int PRIMARY KEY IDENTITY(1, 1),
  fecha datetime,
  total float,
  id_estado int,
  id_cliente int,
  id_descuento int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE estados (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE descuentos (
  id int PRIMARY KEY IDENTITY(1, 1),
  descuento float,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE regalos (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE facturas (
  id int PRIMARY KEY IDENTITY(1, 1),
  fecha_emision datetime,
  total float,
  id_pedido int,
  id_medio_de_pago int,
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE medios_de_pago (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

CREATE TABLE monedas (
  id int PRIMARY KEY IDENTITY(1, 1),
  nombre varchar(255),
  created_at datetime DEFAULT GETDATE(),
  updated_at datetime DEFAULT GETDATE()
)

-- Peliculas
ALTER TABLE peliculas
ADD CONSTRAINT fk_peliculas_categorias
FOREIGN KEY (id_categoria) REFERENCES categorias (id);

ALTER TABLE peliculas
ADD CONSTRAINT fk_peliculas_directores
FOREIGN KEY (id_director) REFERENCES directores (id);

ALTER TABLE peliculas
ADD CONSTRAINT fk_peliculas_formatos
FOREIGN KEY (id_formato) REFERENCES formatos (id);

-- Series
ALTER TABLE series
ADD CONSTRAINT fk_series_categorias
FOREIGN KEY (id_categoria) REFERENCES categorias (id);

ALTER TABLE series
ADD CONSTRAINT fk_series_directores
FOREIGN KEY (id_director) REFERENCES directores (id);

ALTER TABLE series
ADD CONSTRAINT fk_series_formatos
FOREIGN KEY (id_formato) REFERENCES formatos (id);

-- Musicas
ALTER TABLE musicas
ADD CONSTRAINT fk_musicas_generos_musicales
FOREIGN KEY (id_genero) REFERENCES generos_musicales (id);

ALTER TABLE musicas
ADD CONSTRAINT fk_musicas_bandas
FOREIGN KEY (id_banda) REFERENCES bandas (id);

ALTER TABLE musicas
ADD CONSTRAINT fk_musicas_formatos
FOREIGN KEY (id_formato) REFERENCES formatos (id);

-- Sucursales
ALTER TABLE sucursales
ADD CONSTRAINT fk_sucursales_contactos
FOREIGN KEY (id_contacto) REFERENCES contactos (id);

ALTER TABLE sucursales
ADD CONSTRAINT fk_sucursales_direcciones
FOREIGN KEY (id_direccion) REFERENCES direcciones (id);

ALTER TABLE sucursales
ADD CONSTRAINT fk_sucursales_datos_fiscales
FOREIGN KEY (id_datos_fiscales) REFERENCES datos_fiscales (id);

-- Sucursales_Peliculas
ALTER TABLE sucursales_peliculas
ADD CONSTRAINT fk_sucursales_peliculas_sucursal
FOREIGN KEY (id_sucursal) REFERENCES sucursales (id);

ALTER TABLE sucursales_peliculas
ADD CONSTRAINT fk_sucursales_peliculas_peliculas
FOREIGN KEY (id_pelicula) REFERENCES peliculas (id);

-- Sucursales_Series
ALTER TABLE sucursales_series
ADD CONSTRAINT fk_sucursales_series_sucursales
FOREIGN KEY (id_sucursal) REFERENCES sucursales (id);

ALTER TABLE sucursales_series
ADD CONSTRAINT fk_sucursales_series_series
FOREIGN KEY (id_serie) REFERENCES series (id);

-- Sucursales_Musicas
ALTER TABLE sucursales_musicas
ADD CONSTRAINT fk_sucursales_musicas_sucursales
FOREIGN KEY (id_sucursal) REFERENCES sucursales (id);

ALTER TABLE sucursales_musicas
ADD CONSTRAINT fk_sucursales_musicas_musicas
FOREIGN KEY (id_musica) REFERENCES musicas (id);

-- Clientes_Peliculas
ALTER TABLE clientes_peliculas
ADD CONSTRAINT fk_clientes_peliculas_clientes
FOREIGN KEY (id_cliente) REFERENCES clientes (id);

ALTER TABLE clientes_peliculas
ADD CONSTRAINT fk_clientes_peliculas_peliculas
FOREIGN KEY (id_pelicula) REFERENCES peliculas (id);

-- Clientes_Series
ALTER TABLE clientes_series
ADD CONSTRAINT fk_clientes_series_clientes
FOREIGN KEY (id_cliente) REFERENCES clientes (id);

ALTER TABLE clientes_series
ADD CONSTRAINT fk_clientes_series_series
FOREIGN KEY (id_serie) REFERENCES series (id);

-- Clientes_Musicas
ALTER TABLE clientes_musicas
ADD CONSTRAINT fk_clientes_musicas_clientes
FOREIGN KEY (id_cliente) REFERENCES clientes (id);

ALTER TABLE clientes_musicas
ADD CONSTRAINT fk_clientes_musicas_musicas
FOREIGN KEY (id_musica) REFERENCES musicas (id);

-- Empleados
ALTER TABLE empleados
ADD CONSTRAINT fk_empleados_generos
FOREIGN KEY (id_genero) REFERENCES generos (id);

ALTER TABLE empleados
ADD CONSTRAINT fk_empleados_contactos
FOREIGN KEY (id_contacto) REFERENCES contactos (id);

ALTER TABLE empleados
ADD CONSTRAINT fk_empleados_direcciones
FOREIGN KEY (id_direccion) REFERENCES direcciones (id);

ALTER TABLE empleados
ADD CONSTRAINT fk_empleados_datos_fiscales
FOREIGN KEY (id_datos_fiscales) REFERENCES datos_fiscales (id);

ALTER TABLE empleados
ADD CONSTRAINT fk_empleados_sucursales
FOREIGN KEY (id_sucursal) REFERENCES sucursales (id);

-- Clientes
ALTER TABLE clientes
ADD CONSTRAINT fk_clientes_generos
FOREIGN KEY (id_genero) REFERENCES generos (id);

ALTER TABLE clientes
ADD CONSTRAINT fk_clientes_contactos
FOREIGN KEY (id_contacto) REFERENCES contactos (id);

ALTER TABLE clientes
ADD CONSTRAINT fk_clientes_direcciones
FOREIGN KEY (id_direccion) REFERENCES direcciones (id);

ALTER TABLE clientes
ADD CONSTRAINT fk_clientes_datos_fiscales
FOREIGN KEY (id_datos_fiscales) REFERENCES datos_fiscales (id);

-- Direcciones
ALTER TABLE direcciones
ADD CONSTRAINT fk_direcciones_provincias
FOREIGN KEY (id_provincia) REFERENCES provincias (id);

-- Provincias
ALTER TABLE provincias
ADD CONSTRAINT fk_provincias_paises
FOREIGN KEY (id_pais) REFERENCES paises (id);

-- Detalle_Pedidos
ALTER TABLE detalle_pedidos
ADD CONSTRAINT fk_detalle_pedidos_pedidos
FOREIGN KEY (id_pedido) REFERENCES pedidos (id);

ALTER TABLE detalle_pedidos
ADD CONSTRAINT fk_detalle_pedidos_peliculas
FOREIGN KEY (id_pelicula) REFERENCES peliculas (id);

ALTER TABLE detalle_pedidos
ADD CONSTRAINT fk_detalle_pedidos_series
FOREIGN KEY (id_serie) REFERENCES series (id);

ALTER TABLE detalle_pedidos
ADD CONSTRAINT fk_detalle_pedidos_musicas
FOREIGN KEY (id_musica) REFERENCES musicas (id);

-- Pedidos
ALTER TABLE pedidos
ADD CONSTRAINT fk_pedidos_estados
FOREIGN KEY (id_estado) REFERENCES estados (id);

ALTER TABLE pedidos
ADD CONSTRAINT fk_pedidos_clientes
FOREIGN KEY (id_cliente) REFERENCES clientes (id);

ALTER TABLE pedidos
ADD CONSTRAINT fk_pedidos_descuentos
FOREIGN KEY (id_descuento) REFERENCES descuentos (id);

-- Facturas
ALTER TABLE facturas
ADD CONSTRAINT fk_facturas_pedidos
FOREIGN KEY (id_pedido) REFERENCES pedidos (id);

ALTER TABLE facturas
ADD CONSTRAINT fk_facturas_medios_de_pago
FOREIGN KEY (id_medio_de_pago) REFERENCES medios_de_pago (id);
