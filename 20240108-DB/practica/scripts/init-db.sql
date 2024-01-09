CREATE TABLE companies (
    id int IDENTITY(1, 1) PRIMARY KEY,
    name varchar(255)
);

CREATE TABLE cities (
    id int IDENTITY(1, 1) PRIMARY KEY,
    name varchar(255),
    cod_postal varchar(255)
);

CREATE TABLE locations (
    id int IDENTITY(1, 1) PRIMARY KEY,
    street varchar(255) NOT NULL,
    number int NOT NULL,
    id_city int NOT NULL,
    FOREIGN KEY (id_city) REFERENCES cities(id)
);

CREATE TABLE types (
    id int IDENTITY(1, 1) PRIMARY KEY,
    type varchar(255) NOT NULL
);

CREATE TABLE branchs (
    id int IDENTITY(1, 1) PRIMARY KEY,
    name varchar(255) NOT NULL,
    id_companie int NOT NULL,
    id_location int NOT NULL,
    FOREIGN KEY (id_location) REFERENCES locations(id),
    FOREIGN KEY (id_companie) REFERENCES companies(id)
);

CREATE TABLE genders (
    id int IDENTITY(1, 1) PRIMARY KEY,
    gender varchar(255) NOT NULL
);

CREATE TABLE formats (
    id int IDENTITY(1, 1) PRIMARY KEY,
    format varchar(255) NOT NULL
);

CREATE TABLE products (
    id int IDENTITY(1, 1) PRIMARY KEY,
    title varchar(255) NOT NULL,
    stock int NOT NULL,
    stock_min int NOT NULL,
    author varchar(255) NOT NULL,
    description varchar(255),
    sale_price float NOT NULL,
    rental_price float,
    id_type int NOT NULL,
    id_gender int NOT NULL,
    id_format int NOT NULL,
    id_branch int NOT NULL,
    FOREIGN KEY (id_type) REFERENCES types(id),
    FOREIGN KEY (id_gender) REFERENCES genders(id),
    FOREIGN KEY (id_format) REFERENCES formats(id),
    FOREIGN KEY (id_branch) REFERENCES branchs(id)
);

CREATE TABLE clients(
    id int IDENTITY(1, 1) PRIMARY KEY,
    name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    tel bigint NOT NULL,
    birth_date date NOT NULL,
    is_partner bit NOT NULL,
    id_location int NOT NULL,
    id_branch int NOT NULL,
    FOREIGN KEY (id_location) REFERENCES locations(id),
    FOREIGN KEY (id_branch) REFERENCES branchs(id)
);

CREATE TABLE employees (
    id int IDENTITY(1, 1) PRIMARY KEY,
    name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    dni bigint NOT NULL,
    email varchar(255) NOT NULL,
    tel bigint NOT NULL,
    legajo varchar(255) NOT NULL,
    id_location int NOT NULL,
    id_branch int NOT NULL,
    FOREIGN KEY (id_location) REFERENCES locations(id),
    FOREIGN KEY (id_branch) REFERENCES branchs(id)
);

CREATE TABLE payment_methods (
    id int IDENTITY(1, 1) PRIMARY KEY,
    payment_method varchar(255) NOT NULL
);

CREATE TABLE orders (
    id int IDENTITY(1, 1) PRIMARY KEY,
    number_order int NOT NULL,
    date date NOT NULL,
    total float NOT NULL,
    discount float NOT NULL,
    id_client int NOT NULL,
    id_employee int NOT NULL,
    id_payment_method int NOT NULL,
    FOREIGN KEY (id_client) REFERENCES clients(id),
    FOREIGN KEY (id_employee) REFERENCES employees(id),
    FOREIGN KEY (id_payment_method) REFERENCES payment_methods(id)
);

CREATE TABLE order_details (
    id int IDENTITY(1, 1) PRIMARY KEY,
    cant int NOT NULL,
    is_buy bit NOT NULL,
    price float NOT NULL,
    date_return DATE,
    id_product int NOT NULL,
    id_order int NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id),
    FOREIGN KEY (id_order) REFERENCES orders(id)
);

CREATE TABLE penalties (
    id int IDENTITY(1, 1) PRIMARY KEY,
    date_return_real date NOT NULL,
    amount_day float NOT NULL,
    id_order_detail int NOT NULL,
    FOREIGN KEY (id_order_detail) REFERENCES order_details(id)
);

CREATE TABLE bills (
    id int IDENTITY(1, 1) PRIMARY KEY,
    cuil bigint NOT NULL,
    location varchar(255) NOT NULL,
    total float NOT NULL,
    id_order int NOT NULL,
    FOREIGN KEY (id_order) REFERENCES orders(id)
);

INSERT INTO cities (name, cod_postal) VALUES 
    ('Córdoba', '5000'),
    ('Villa María', '5900'),
    ('Río Cuarto', '5800'),
    ('Jesús María', '5220'),
    ('La Falda', '5172');

INSERT INTO locations (street, number, id_city) VALUES 
    ('Avenida Principal', 123, 1),
    ('Calle del Centro', 456, 1),
    ('Avenida Norte', 789, 2),
    ('Calle Sur', 321, 3),
    ('Avenida Oeste', 654, 4),
    ('Calle Este', 987, 5);

INSERT INTO companies (name) VALUES
    ('blockbuster cordoba');

INSERT INTO branchs (name, id_companie, id_location) VALUES 
    ('Sucursal Principal - Tech Solutions Inc.', 1, 2),
    ('Sede Principal - Global Innovations Co.', 1, 3),
    ('Sucursal Secundaria - Global Innovations Co.', 1, 2),
    ('Sucursal Principal - Green Energy Ltd.', 1, 3),
    ('Sucursal Secundaria - Green Energy Ltd.', 1, 4),
    ('Sede Central - Financial Dynamics Group', 1, 5),
    ('Sucursal de Operaciones - Financial Dynamics Group', 1, 5);

INSERT INTO types (type) VALUES 
    ('Música'),
    ('Película'),
    ('Serie');

INSERT INTO genders (gender) VALUES 
    ('Drama'),
    ('Comedia'),
    ('Acción');

INSERT INTO formats (format) VALUES 
    ('CD'),
    ('DVD'),
    ('Vinilo'),
    ('Blu-ray');

INSERT INTO clients (name, last_name, email, tel, birth_date, is_partner, id_location, id_branch) VALUES 
    ('Juan', 'Gomez', 'juan@gmail.com', 123456789, '1990-05-15', 1, 2, 1),
    ('Maria', 'Rodriguez', 'maria@gmail.com', 987654321, '1985-08-22', 0, 2, 1),
    ('Pedro', 'Martinez', 'pedro@gmail.com', 555888777, '1992-12-10', 1, 3, 1),
    ('Ana', 'Lopez', 'ana@gmail.com', 33322211, '1980-03-28', 0, 4, 1),
    ('Luis', 'Hernandez', 'luis@gmail.com', 11444777, '1995-06-18', 1, 5, 1);

INSERT INTO employees (name, last_name, dni, email, tel, legajo, id_location, id_branch) VALUES 
    ('Carlos', 'Gonzalez', 123456789, 'carlos@gmail.com', 555666777, 'EMP001', 3, 1),
    ('Laura', 'Fernandez', 987654321, 'laura@gmail.com', 333444555, 'EMP002', 2, 1),
    ('Roberto', 'Alvarez', 555666777, 'roberto@gmail.com', 11222333, 'EMP003', 3, 1),
    ('Sofia', 'Mendoza', 333444555, 'sofia@gmail.com', 999888777, 'EMP004', 4, 1),
    ('Alejandro', 'Perez', 11222333, 'alejandro@gmail.com', 777888999, 'EMP005', 5, 1);

INSERT INTO products (title, stock, stock_min, author, description, sale_price, rental_price, id_type, id_gender, id_format, id_branch) VALUES 
    ('Inception', 20, 5, 'Christopher Nolan', 'Una película de ciencia ficción y acción.', 21.99, 3.99, 2, 3, 4, 1),
    ('Breaking Bad', 15, 4, 'Vince Gilligan', 'Una serie de televisión dramática y criminal.', 18.99, 3.29, 3, 2, 2, 1),
    ('The Rolling Stones - Sticky Fingers', 25, 8, 'The Rolling Stones', 'Álbum clásico de rock and roll.', 27.99, 2.79, 1, 2, 3, 1),
    ('Stranger Things 2', 18, 5, 'Duffer Brothers', 'La continuación de la emocionante serie de ciencia ficción.', 19.99, 3.79, 3, 1, 2, 1),
    ('The Shawshank Redemption', 28, 7, 'Frank Darabont', 'Una película dramática basada en una historia de Stephen King.', 23.99, 4.29, 2, 1, 4, 1),
    ('Pink Floyd - The Dark Side of the Moon', 32, 10, 'Pink Floyd', 'Uno de los álbumes más vendidos de todos los tiempos.', 29.99, 3.19, 1, 2, 3, 1),
    ('Game of Thrones', 22, 6, 'David Benioff, D. B. Weiss', 'Una serie épica de fantasía medieval.', 20.99, 3.59, 3, 1, 2, 1),
    ('Queen - A Night at the Opera', 30, 9, 'Queen', 'Álbum que contiene la famosa canción Bohemian Rhapsody.', 28.99, 2.89, 1, 2, 3, 1),
    ('The Sopranos', 17, 4, 'David Chase', 'Una serie de televisión sobre la vida de un jefe de la mafia.', 17.99, 3.49, 3, 1, 2, 1),
    ('Led Zeppelin - IV', 26, 8, 'Led Zeppelin', 'Álbum icónico de rock con Stairway to Heaven.', 26.99, 2.69, 1, 2, 3, 1);

INSERT INTO payment_methods (payment_method) VALUES 
    ('Mercado Pago'),
    ('Transferencia'),
    ('Efectivo'),
    ('Crypto');

INSERT INTO orders (number_order, date, total, discount, id_client, id_employee, id_payment_method) VALUES 
    (1001, '2024-01-10', 150.50, 10.00, 2, 2, 2),
    (1002, '2024-01-1', 220.75, 15.50, 2, 2, 3),
    (1003, '2024-01-12', 75.20, 5.25, 3, 3, 3),
    (1004, '2024-01-1', 300.00, 20.00, 4, 4, 4),
    (1005, '2024-01-14', 180.90, 12.75, 5, 5, 3),
    (1006, '2024-01-15', 90.30, 6.25, 2, 4, 2),
    (1007, '2024-01-16', 120.75, 8.50, 2, 2, 3),
    (1008, '2024-01-17', 45.60, 3.25, 3, 3, 4),
    (1009, '2024-01-18', 250.00, 17.50, 4, 4, 2),
    (1010, '2024-01-19', 15.80, 9.50, 5, 5, 2);

INSERT INTO order_details (cant, is_buy, price, date_return, id_product, id_order) VALUES
    (2, 1, 29.99, NULL, 4, 2),
    (1, 0, 4.99, '2024-02-01', 4, 2),
    (3, 1, 17.99, NULL, 5, 2),
    (1, 1, 24.99, NULL, 5, 2),
    (2, 0, 14.99, '2024-02-03', 4, 2),
    (1, 1, 9.99, NULL, 6, 2),
    (4, 1, 27.99, NULL, 8, 3),
    (1, 0, 3.99, '2024-02-05', 3, 3),
    (2, 1, 22.99, NULL, 2, 3),
    (3, 1, 19.99, NULL, 4, 4),
    (2, 0, 6.99, '2024-02-07', 6, 4),
    (1, 1, 1.99, NULL, 8, 4),
    (1, 1, 29.99, NULL, 2, 5),
    (3, 0, 12.99, '2024-02-09', 2, 5),
    (2, 1, 23.99, NULL, 3, 5),
    (2, 1, 15.99, NULL, 2, 6),
    (1, 0, 8.99, '2024-02-01', 2, 6),
    (3, 1, 18.99, NULL, 1, 6);

INSERT INTO bills (cuil, location, total, id_order) VALUES
    (234567890, 'Ciudad B', 218.25, 2), 
    (34567890123, 'Ciudad C', 80.45, 3),
    (45678901234, 'Ciudad D', 320.00, 4), 
    (56789012345, 'Ciudad E', 168.15, 5),
    (12345678901, 'Ciudad A', 135.50, 6),
    (23456789012, 'Ciudad B', 218.25, 7),
    (34567890123, 'Ciudad C', 80.45, 8),
    (45678901234, 'Ciudad D', 320.00, 9),
    (56789012345, 'Ciudad E', 168.15, 7),
    (56789012345, 'Ciudad Z', 168.15, 1);

INSERT INTO penalties (date_return_real, amount_day, id_order_detail) VALUES
    ('2024-02-15', 5.00, 2);

INSERT INTO penalties (date_return_real, amount_day, id_order_detail) VALUES
    ('2024-02-06', 2.50, 5);

INSERT INTO penalties (date_return_real, amount_day, id_order_detail) VALUES
    ('2024-02-10', 3.75, 8);
