-- //////////////////////////////////////////	Triggers para logs	////////////////////////////////////////--
-- Trigger para INSERT en Usuarios
DELIMITER //

CREATE TRIGGER after_insert_usuarios
AFTER INSERT ON Usuarios
FOR EACH ROW
BEGIN
    INSERT INTO SUsuarios (IDusuario, Nombre, Apellido, `User`, `Type`, `CreatedAt`)
    VALUES (NEW.IDusuario, NEW.Nombre, NEW.Apellido, USER(), 'INSERT', NOW());
END//

DELIMITER ;

-- Triggers para UPDATE en Usuarios
DELIMITER //

CREATE TRIGGER before_update_usuarios
BEFORE UPDATE ON Usuarios
FOR EACH ROW
BEGIN
    SET NEW.UpdatedAt = NOW();
END// 

DELIMITER ;

DELIMITER //

CREATE TRIGGER after_update_usuarios
AFTER UPDATE ON Usuarios
FOR EACH ROW
BEGIN
    INSERT INTO SUsuarios (IDusuario, Nombre, Apellido, `User`, `Type`, `CreatedAt`)
    VALUES (NEW.IDusuario, NEW.Nombre, NEW.Apellido, USER(), 'UPDATE', NOW());
END//

DELIMITER ;

-- Trigger para DELETE en Usuarios
DELIMITER //

CREATE TRIGGER after_delete_usuarios
AFTER DELETE ON Usuarios
FOR EACH ROW
BEGIN
    INSERT INTO SUsuarios (IDusuario, Nombre, Apellido, `User`, `Type`, `CreatedAt`)
    VALUES (OLD.IDusuario, OLD.Nombre, OLD.Apellido, USER(), 'DELETE', NOW());
END//

DELIMITER ;

-- Trigger para INSERT en Reservas
DELIMITER //

CREATE TRIGGER after_insert_reservas
AFTER INSERT ON Reservas
FOR EACH ROW
BEGIN
    INSERT INTO SReservas (IDreserva, `User`, `Type`, `CreatedAt`)
    VALUES (NEW.IDreserva, USER(), 'INSERT', NOW());
END//

DELIMITER ;

-- Triggers para UPDATE en Reservas
DELIMITER //

CREATE TRIGGER before_update_reservas
BEFORE UPDATE ON Reservas
FOR EACH ROW
BEGIN
    SET NEW.UpdatedAt = NOW();
END//

DELIMITER ;

DELIMITER //

CREATE TRIGGER after_update_reservas
AFTER UPDATE ON Reservas
FOR EACH ROW
BEGIN
    INSERT INTO SReservas (IDreserva, `User`, `Type`, `CreatedAt`)
    VALUES (NEW.IDreserva, USER(), 'UPDATE', NOW());
END//

DELIMITER ;

-- Trigger para DELETE en Reservas
DELIMITER //

CREATE TRIGGER after_delete_reservas
AFTER DELETE ON Reservas
FOR EACH ROW
BEGIN
    INSERT INTO SReservas (IDreserva, `User`, `Type`, `CreatedAt`)
    VALUES (OLD.IDreserva, USER(), 'DELETE', NOW());
END//

DELIMITER ;

-- Trigger para INSERT en Atracciones
DELIMITER //

CREATE TRIGGER after_insert_atracciones
AFTER INSERT ON Atracciones
FOR EACH ROW
BEGIN
    INSERT INTO SAtracciones (IDatraccion, Nombre, `User`, `Type`, `CreatedAt`)
    VALUES (NEW.IDatraccion, NEW.Nombre, USER(), 'INSERT', NOW());
END//

DELIMITER ;

-- Triggers para UPDATE en Atracciones
DELIMITER //

CREATE TRIGGER before_update_atracciones
BEFORE UPDATE ON Atracciones
FOR EACH ROW
BEGIN
    SET NEW.UpdatedAt = NOW();
END//

DELIMITER ;

DELIMITER //

CREATE TRIGGER after_update_atracciones
AFTER UPDATE ON Atracciones
FOR EACH ROW
BEGIN
    INSERT INTO SAtracciones (IDatraccion, Nombre, `User`, `Type`, `CreatedAt`)
    VALUES (NEW.IDatraccion, NEW.Nombre, USER(), 'UPDATE', NOW());
END//

DELIMITER ;

-- Trigger para DELETE en Atracciones
DELIMITER //

CREATE TRIGGER after_delete_atracciones
AFTER DELETE ON Atracciones
FOR EACH ROW
BEGIN
    INSERT INTO SAtracciones (IDatraccion, Nombre, `User`, `Type`, `CreatedAt`)
    VALUES (OLD.IDatraccion, OLD.Nombre, USER(), 'DELETE', NOW());
END//

DELIMITER ;

-- Trigger para UPDATE en Departamentos
DELIMITER //

CREATE TRIGGER before_update_departamentos
BEFORE UPDATE ON Departamentos
FOR EACH ROW
BEGIN
    SET NEW.UpdatedAt = NOW();
END//

DELIMITER ;

-- Trigger para UPDATE en MetodoPago
DELIMITER //

CREATE TRIGGER before_update_metodopago
BEFORE UPDATE ON MetodoPago
FOR EACH ROW
BEGIN
    SET NEW.UpdatedAt = NOW();
END//

DELIMITER ;
 