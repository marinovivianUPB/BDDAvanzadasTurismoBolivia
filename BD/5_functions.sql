-- /////////////////////////////// Total de reservas de un usuario en un mes especifico //////////////////////////////////////--
DELIMITER //
CREATE FUNCTION TotalReservasUsuario(
    pIDusuario INT,
    pMes INT,
    pAno INT
) RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE vTotalReservas INT;

    SELECT COUNT(*) INTO vTotalReservas
    FROM Reservas
    WHERE IDusuario = pIDusuario
      AND MONTH(FechaHora) = pMes
      AND YEAR(FechaHora) = pAno;

    RETURN vTotalReservas;
END//

DELIMITER ;
