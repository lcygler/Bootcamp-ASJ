-- Clientes
UPDATE clientes SET apellido = 'Pérez' WHERE id = 1;

ALTER TABLE clientes
ADD created_at datetime DEFAULT GETDATE();

ALTER TABLE clientes
ADD updated_at datetime DEFAULT GETDATE();
