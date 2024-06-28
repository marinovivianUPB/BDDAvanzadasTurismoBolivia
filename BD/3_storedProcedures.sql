-- ////////////////////////////////////	Creado de varias reservas	////////////////////////////////////////////--
DELIMITER //

CREATE PROCEDURE insert_reservas()
BEGIN 
  DECLARE i INT DEFAULT 0;
  WHILE i < 1000 DO
    INSERT INTO `Reservas` (`IDusuario`, `IDatraccion`, `FechaHora`, `NumPersonas`, `IDMetodoPago`)
    VALUES (
      FLOOR(RAND() * 100) + 1, -- ID de usuarios de 1 a 100 
      FLOOR(RAND() * 32) + 1, -- ID de atracciones del 1 al 32
      NOW() + INTERVAL FLOOR(RAND() * 30) DAY, -- Fecha aleatoria dentro de los próximos 30 días
      FLOOR(RAND() * 10) + 1, -- Número de personas entre 1 y 10
      FLOOR(RAND() * 3) + 1 -- ID de métodos de pago del 1 al 3
    );
    SET i = i + 1;
  END WHILE;
END//

DELIMITER ;

-- Insertar historial de reservas
DELIMITER //

CREATE PROCEDURE insert_hist_reservas()
BEGIN 
  DECLARE i INT DEFAULT 0;
  WHILE i < 1000 DO
    INSERT INTO `Reservas` (`IDusuario`, `IDatraccion`, `FechaHora`, `NumPersonas`, `IDMetodoPago`)
    VALUES (
      FLOOR(RAND() * 100) + 1, -- ID de usuarios de 1 a 100 
      FLOOR(RAND() * 32) + 1, -- ID de atracciones del 1 al 32
      NOW() - INTERVAL FLOOR(RAND() * 30) DAY, -- Fecha aleatoria dentro de los anteriores 30 días
      FLOOR(RAND() * 10) + 1, -- Número de personas entre 1 y 10
      FLOOR(RAND() * 3) + 1 -- ID de métodos de pago del 1 al 3
    );
    SET i = i + 1;
  END WHILE;
END//

DELIMITER ;

-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////
--  											Queries Importantes						                	--
-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////

-- ////////////////////////////////////	Registro y gestion de ususarios	////////////////////////////////////////////--
DELIMITER //

CREATE PROCEDURE RegistrarUsuario(
    IN pNombre VARCHAR(80),
    IN pApellido VARCHAR(80),
    IN pCorreoElectronico VARCHAR(80),
    IN pFechaDeNacimiento DATE,
    IN pTel INT
)
BEGIN
    INSERT INTO Usuarios (Nombre, Apellido, CorreoElectronico, FechaDeNacimiento, Tel)
    VALUES (pNombre, pApellido, pCorreoElectronico, pFechaDeNacimiento, pTel);
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE ActualizarUsuario(
    IN pIDusuario INT,
    IN pNombre VARCHAR(80),
    IN pApellido VARCHAR(80),
    IN pCorreoElectronico VARCHAR(80),
    IN pFechaDeNacimiento DATE,
    IN pTel INT
)
BEGIN
    DECLARE vCount INT;

    -- Verificar que el usuario exista
    SELECT COUNT(*) INTO vCount FROM Usuarios WHERE IDusuario = pIDusuario;
    IF vCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Usuario no existe';
    END IF;

    -- Actualizar la información del usuario
    UPDATE Usuarios
    SET Nombre = pNombre,
        Apellido = pApellido,
        CorreoElectronico = pCorreoElectronico,
        FechaDeNacimiento = pFechaDeNacimiento,
        Tel = pTel
    WHERE IDusuario = pIDusuario;
END//

DELIMITER ;

-- ////////////////////////////////////	Sistema de Reservas en Línea	////////////////////////////////////////////--
DELIMITER //

CREATE PROCEDURE CrearReserva(
    IN pIDusuario INT,
    IN pIDatraccion INT,
    IN pFechaHora DATETIME,
    IN pNumPersonas INT,
    IN pIDMetodoPago INT
)
BEGIN
    DECLARE vCount INT;

    -- Verificar que el usuario exista
    SELECT COUNT(*) INTO vCount FROM Usuarios WHERE IDusuario = pIDusuario;
    IF vCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Usuario no existe';
    END IF;

    -- Verificar que la atracción exista
    SELECT COUNT(*) INTO vCount FROM Atracciones WHERE IDatraccion = pIDatraccion;
    IF vCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Atracción no existe';
    END IF;

    -- Verificar que el método de pago sea válido
    SELECT COUNT(*) INTO vCount FROM MetodoPago WHERE IDMetodoPago = pIDMetodoPago;
    IF vCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Método de pago no válido';
    END IF;

    -- Verificar disponibilidad de la atracción en la fecha y hora
    SELECT COUNT(*) INTO vCount
    FROM Reservas
    WHERE IDatraccion = pIDatraccion
      AND FechaHora = pFechaHora;
    IF vCount > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Atracción no disponible en la fecha y hora seleccionada';
    END IF;

    -- Insertar la reserva
    INSERT INTO Reservas (IDusuario, IDatraccion, FechaHora, NumPersonas, IDMetodoPago)
    VALUES (pIDusuario, pIDatraccion, pFechaHora, pNumPersonas, pIDMetodoPago);
END//

DELIMITER ;

-- ////////////////////////////////////	 Confirmación y Cancelación de Reservas	////////////////////////////////////////////--
DELIMITER //

CREATE PROCEDURE ConfirmarReserva(
    IN pIDreserva INT
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        -- Manejo de errores: Rollback en caso de error
        ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error al confirmar la reserva';
    END;

    START TRANSACTION;
    
    -- Verificar que la reserva exista
    IF (SELECT COUNT(*) FROM Reservas WHERE IDreserva = pIDreserva) = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Reserva no existe';
       ELSE
        SELECT 'Reserva confirmada' AS Mensaje;
    END IF;

    -- Confirmar la reserva
     UPDATE Reservas
     SET Estado = 'Confirmada'
     WHERE IDreserva = pIDreserva;

    COMMIT;
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE CancelarReserva(
    IN pIDreserva INT
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        -- Manejo de errores: Rollback en caso de error
        ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Error al cancelar la reserva';
    END;

    START TRANSACTION;
    
    -- Verificar que la reserva exista
    IF (SELECT COUNT(*) FROM Reservas WHERE IDreserva = pIDreserva) = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Reserva no existe';
       ELSE
        SELECT 'Reserva cancelada' AS Mensaje;
    END IF;

    -- Cancelar la reserva
     UPDATE Reservas
     SET Estado = 'Cancelada'
     WHERE IDreserva = pIDreserva;

    COMMIT;
END//

DELIMITER ;