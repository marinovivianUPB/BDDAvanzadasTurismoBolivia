-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////
--  											Vistas para BigData						                	--
-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////

-- /////////////////////////////////////////	Total de reservas por atraccion	////////////////////////////////////////////--
-- DELIMITER //

CREATE OR REPLACE VIEW TotalReservasPorAtraccion AS
SELECT 
    a.Nombre,
    a.Ubicacion,
    a.HorarioAbre,
    a.HorarioCierre,
    d.Nombre AS Departamento,
    COUNT(r.IDreserva) AS TotalReservas
FROM 
    Atracciones a
    JOIN Departamentos d ON a.IDdepartamento = d.IDdepartamento
    JOIN Reservas r ON a.IDatraccion = r.IDatraccion
GROUP BY 
    a.Nombre,
    a.Ubicacion,
    a.HorarioAbre,
    a.HorarioCierre,
    d.Nombre;
-- //

-- DELIMITER ;

 -- /////////////////////////////////////////	Total de personas por atraccion	////////////////////////////////////////////-- 
-- DELIMITER //

 CREATE OR REPLACE VIEW TotalPersonasPorAtraccion AS
 SELECT 
     a.Nombre,
     a.Ubicacion,
     a.HorarioAbre,
     a.HorarioCierre,
     d.Nombre AS Departamento,
     SUM(r.NumPersonas) AS TotalPersonas
 FROM 
     Atracciones a
     JOIN Departamentos d ON a.IDdepartamento = d.IDdepartamento
     JOIN Reservas r ON a.IDatraccion = r.IDatraccion
 GROUP BY 
     a.Nombre,
     a.Ubicacion,
     a.HorarioAbre,
     a.HorarioCierre,
     d.Nombre;
-- //

-- DELIMITER ;

-- /////////////////////////////////////	Total de personas por atraccion cada 3 meses	///////////////////////////////////--    
-- DELIMITER //

CREATE OR REPLACE VIEW TotalPersonasPorAtraccionCada3Meses AS
SELECT 
    a.Nombre,
    a.Ubicacion,
    a.HorarioAbre,
    a.HorarioCierre,
    d.Nombre AS Departamento,
    YEAR(r.FechaHora) AS Anio,
    CEIL(MONTH(r.FechaHora) / 3) AS Trimestre,
    SUM(r.NumPersonas) AS TotalPersonas
FROM 
    Atracciones a
    JOIN Departamentos d ON a.IDdepartamento = d.IDdepartamento
    JOIN Reservas r ON a.IDatraccion = r.IDatraccion
GROUP BY 
    a.Nombre,
    a.Ubicacion,
    a.HorarioAbre,
    a.HorarioCierre,
    d.Nombre,
    Anio,
    Trimestre;
-- //

-- DELIMITER ;