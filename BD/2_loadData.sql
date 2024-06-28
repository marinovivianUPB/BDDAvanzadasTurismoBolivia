-- //////////////////////////////////////////	Insercion de dptos	////////////////////////////////////////--
INSERT INTO Departamentos (IDdepartamento, Nombre) VALUES
(1, 'La Paz'),
(2, 'Oruro'),
(3, 'Potosí'),
(4, 'Cochabamba'),
(5, 'Sucre'),
(6, 'Tarija'),
(7, 'Santa Cruz'),
(8, 'Beni'),
(9, 'Pando');

-- //////////////////////////////////////	Insercion de atracciones	///////////////////////////////////////--
-- Atracciones para La Paz (IDdepartamento = 1)
INSERT INTO Atracciones (Nombre, Ubicacion, Descripcion, HorarioAbre, HorarioCierre, IDdepartamento) VALUES
('Teleférico rojo', 'La Paz', 'Viaje panorámico por encima de la ciudad de La Paz.', '06:30:00', '22:00:00', 1),
('Valle de la Luna', 'Mallasa, La Paz', 'Formaciones rocosas únicas que parecen la superficie lunar.', '10:00:00', '17:00:00', 1),
('Isla del Sol', 'Lago Titicaca', 'Lugar sagrado con ruinas incas y hermosas vistas del lago Titicaca.', '08:30:00', '14:00:00', 1),
('Complejo Arqueológico de Tiwanaku', 'Tiahuanaco', 'Antigua ciudad arqueológica de Bolivia, centro de la civilización tiahuanacota.', '09:00:00', '17:00:00', 1);

-- Atracciones para Oruro (IDdepartamento = 2)
INSERT INTO Atracciones (Nombre, Ubicacion, Descripcion, HorarioAbre, HorarioCierre, IDdepartamento) VALUES
('Carnaval de Oruro', 'Oruro', 'Festival de danzas folclóricas reconocido internacionalmente.', '08:00:00', '23:59:00', 2),
('Mina San José', 'Oruro', 'Visita guiada a una mina histórica con galerías subterráneas.', '10:30:00', '15:00:00', 2),
('Salar de Coipasa', 'Oruro', 'Extensa planicie salada que ofrece espectaculares paisajes.', '09:30:00', '15:00:00', 2),
('Museo Nacional de Etnografía y Folklore', 'Oruro', 'Colección de arte y objetos tradicionales de la región.', '13:00:00', '18:00:00', 2);

-- Atracciones para Potosí (IDdepartamento = 3)
INSERT INTO Atracciones (Nombre, Ubicacion, Descripcion, HorarioAbre, HorarioCierre, IDdepartamento) VALUES
('Cerro Rico', 'Potosí', 'Famosa montaña con minas de plata históricas.', '08:00:00', '18:00:00', 3),
('Casa Nacional de la Moneda', 'Potosí', 'Antigua ceca con exhibiciones sobre la historia de la moneda.', '10:00:00', '17:00:00', 3),
('Laguna Colorada', 'Reserva Nacional de Fauna Andina Eduardo Avaroa', 'Laguna con aguas rojizas habitada por flamencos.', '09:30:00', '16:00:00', 3),
('Plaza de las Banderas Uyuni', 'Colchani', 'Filas de imponentes astas con múltiples banderas, Monumento Nacional', '10:30:00', '18:00:00', 3);

-- Atracciones para Cochabamba (IDdepartamento = 4)
INSERT INTO Atracciones (Nombre, Ubicacion, Descripcion, HorarioAbre, HorarioCierre, IDdepartamento) VALUES
('Cristo de la Concordia', 'Cochabamba', 'Estatua de Cristo con vista panorámica de la ciudad.', '08:00:00', '21:00:00', 4),
('Parque Nacional Carrasco', 'Cochabamba', 'Reserva natural con diversa flora y fauna.', '10:00:00', '18:00:00', 4),
('Plaza 14 de Septiembre', 'Cochabamba', 'Plaza principal con arquitectura colonial y fuente central.', '06:00:00', '22:00:00', 4);

-- Atracciones para Sucre (IDdepartamento = 5)
INSERT INTO Atracciones (Nombre, Ubicacion, Descripcion, HorarioAbre, HorarioCierre, IDdepartamento) VALUES
('Centro Histórico de Sucre', 'Sucre', 'Patrimonio de la Humanidad con arquitectura colonial.', '07:00:00', '22:00:00', 5),
('Parque Cretácico', 'Sucre', 'Parque con huellas de dinosaurios y réplicas de saurópodos.', '10:00:00', '17:00:00', 5),
('Museo de la Recoleta', 'Sucre', 'Convento franciscano con arte religioso y vistas panorámicas.', '09:30:00', '17:00:00', 5),
('Castillo de la Glorieta', 'Sucre', 'Residencia histórica con jardines y vistas al valle.', '12:00:00', '16:00:00', 5);

-- Atracciones para Tarija (IDdepartamento = 6)
INSERT INTO Atracciones (Nombre, Ubicacion, Descripcion, HorarioAbre, HorarioCierre, IDdepartamento) VALUES
('Viñedos de Tarija', 'Tarija', 'Tour por viñedos y bodegas con degustación de vinos.', '08:00:00', '18:00:00', 6),
('Parque Nacional Aguaragüe', 'Tarija', 'Área protegida con biodiversidad y paisajes naturales.', '09:30:00', '17:00:00', 6),
('Casa Dorada', 'Tarija', 'Mansión histórica con arquitectura colonial y jardines.', '11:00:00', '17:00:00', 6);

-- Atracciones para Santa Cruz (IDdepartamento = 7)
INSERT INTO Atracciones (Nombre, Ubicacion, Descripcion, HorarioAbre, HorarioCierre, IDdepartamento) VALUES
('Biocentro Güembé', 'Santa Cruz de la Sierra', 'Parque con mariposario, laguna y senderos naturales.', '08:00:00', '20:00:00', 7),
('Plaza 24 de Septiembre', 'Santa Cruz de la Sierra', 'Plaza principal con arquitectura colonial y cafés.', '06:00:00', '22:00:00', 7),
('Parque Nacional Amboró', 'Santa Cruz', 'Reserva con bosques tropicales y cascadas.', '09:30:00', '18:00:00', 7),
('Jardín Botánico de Santa Cruz', 'Santa Cruz de la Sierra', 'Colección de plantas nativas y senderos educativos.', '09:00:00', '18:00:00', 7);

-- Atracciones para Beni (IDdepartamento = 8)
INSERT INTO Atracciones (Nombre, Ubicacion, Descripcion, HorarioAbre, HorarioCierre, IDdepartamento) VALUES
('Pampas del Yacuma', 'Rurrenabaque, Beni', 'Safari en la selva con avistamiento de animales y aves.', '08:00:00', '20:00:00', 8),
('Parque Nacional Madidi', 'Rurrenabaque, Beni', 'Reserva con selva tropical y expediciones guiadas.', '10:00:00', '17:00:00', 8),
('Feria de la Raza Brava', 'Trinidad, Beni', 'Evento cultural con música y danzas tradicionales.', '15:00:00', '23:00:00', 8);

-- Atracciones para Pando (IDdepartamento = 9)
INSERT INTO Atracciones (Nombre, Ubicacion, Descripcion, HorarioAbre, HorarioCierre, IDdepartamento) VALUES
('Reserva Nacional Manuripi', 'Sudeste de Pando', 'Bosque Tropical Húmedo Amazónico, fauna diversa y típica de la region.', '10:00:00', '16:00:00', 9),
('Lago Bay', 'Manuripi, Pando', 'Depósito de aguas cristalinas, caracterizado por una extensa variedad de orquídeas, fauna y flora silvestre y acuática', '10:00:00', '16:00:00', 9),
('Centro Urbano de Cobija', 'Cobija, Pando', 'Pueblo pintoresco con arquitectura original y monumentos significativos en la historia Boliviana', '09:30:00', '22:00:00', 9);

-- //////////////////////////////////////////	Insercion de metodos de pago	////////////////////////////////////////--
INSERT INTO MetodoPago (Metodo)
VALUES ('Tarjeta'), ('Efectivo'), ('QR');

-- //////////////////////////////////////////	Insercion de usuarios	////////////////////////////////////////--
LOAD DATA INFILE '/var/lib/mysql-files/csv/datosUsuarios.csv'
INTO TABLE Usuarios
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(IDusuario, Nombre, Apellido, timestamp, FechaDeNacimiento, Tel, CorreoElectronico);

-- //////////////////////////////////////////	Insercion de reservas	////////////////////////////////////////--
LOAD DATA INFILE '/var/lib/mysql-files/csv/Reservas.csv'
INTO TABLE Reservas 
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(IDreserva, IDusuario, IDatraccion, FechaHora, NumPersonas, IDMetodoPago, CreatedAt, UpdatedAt);