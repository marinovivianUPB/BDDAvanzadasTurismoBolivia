let conn = new Mongo();
let db = conn.getDB('admin');

db.updateUser(process.env.MONGO_INITDB_ROOT_USERNAME, { pwd: process.env.MONGO_INITDB_ROOT_PASSWORD, roles: [{ role: "root", db: "admin" }]})

db.createUser({
    user: process.env.MONGO_ADMIN_USERNAME,
    pwd: process.env.MONGO_ADMIN_PASSWORD,
    roles: [{ role: "dbOwner", db: "turismoBolivia" }]
});

db.createUser({
    user: process.env.MONGO_MANAGER_USERNAME,
    pwd: process.env.MONGO_MANAGER_PASSWORD,
    roles: [{ role: "readWrite", db: "turismoBolivia" }]
});

db.createUser({
    user: process.env.MONGO_VIEWER_USERNAME,
    pwd: process.env.MONGO_VIEWER_PASSWORD,
    roles: [{ role: "read", db: "turismoBolivia" }]
});

db = conn.getDB('turismoBolivia');
use('turismoBolivia')
db.createCollection('usuarios')

use('turismoBolivia')
db.createCollection('atraccionesTuristicas')

use('turismoBolivia')
db.createCollection('comentarios')

use('turismoBolivia')
db.createCollection('fotos')

use('turismoBolivia')
db.createCollection('respuestas')

/**Creacion de fotos de perfil */
for (let i = 1; i <= 100; i++) {
    use('turismoBolivia')
    db.fotos.insertOne({
        _id:i,
        nombre: `fotoPerfil${i}.png`
    });
}

use('turismoBolivia')
db.usuarios.insertMany([
    {
        _id: 1,
        usuarioId: 1,
        nombre: 'Jose',
        apellido: 'Perez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'La Paz',
            zona: 'Miraflores',
            direccion: 'Calle Ortega 123'
        },
        fotoperfil: 1,
        timestamp: new Date('2023-01-01T10:00:00Z')
    },
    {
        _id: 2,
        usuarioId: 2,
        nombre: 'Maria',
        apellido: 'Rodriguez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Santa Cruz de la Sierra',
            zona: 'Equipetrol',
            direccion: 'Av. San Martin 456'
        },
        fotoperfil: 2,
        timestamp: new Date('2023-01-02T10:00:00Z')
    },
    {
        _id: 3,
        usuarioId: 3,
        nombre: 'Carlos',
        apellido: 'Gonzales',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Cochabamba',
            zona: 'Queru Queru',
            direccion: 'Calle Colon 789'
        },
        fotoperfil: 3,
        timestamp: new Date('2023-01-03T10:00:00Z')
    },
    {
        _id: 4,
        usuarioId: 4,
        nombre: 'Ana',
        apellido: 'Lopez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Tarija',
            zona: 'El Molino',
            direccion: 'Calle Sucre 101'
        },
        fotoperfil: 4,
        timestamp: new Date('2023-01-04T10:00:00Z')
    },
    {
        _id: 5,
        usuarioId: 5,
        nombre: 'Luis',
        apellido: 'Fernandez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Oruro',
            zona: 'Zona Norte',
            direccion: 'Calle 6 de Octubre 202'
        },
        fotoperfil: 5,
        timestamp: new Date('2023-01-05T10:00:00Z')
    },
    {
        _id: 6,
        usuarioId: 6,
        nombre: 'Andrea',
        apellido: 'Garcia',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Potosí',
            zona: 'Zona Central',
            direccion: 'Calle Matos 303'
        },
        fotoperfil: 6,
        timestamp: new Date('2023-01-06T10:00:00Z')
    },
    {
        _id: 7,
        usuarioId: 7,
        nombre: 'Jorge',
        apellido: 'Ramirez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Trinidad',
            zona: 'Zona Sur',
            direccion: 'Calle Bolívar 404'
        },
        fotoperfil: 7,
        timestamp: new Date('2023-01-07T10:00:00Z')
    },
    {
        _id: 8,
        usuarioId: 8,
        nombre: 'Sandra',
        apellido: 'Mendez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Sucre',
            zona: 'Zona Norte',
            direccion: 'Calle Junín 505'
        },
        fotoperfil: 8,
        timestamp: new Date('2023-01-08T10:00:00Z')
    },
    {
        _id: 9,
        usuarioId: 9,
        nombre: 'Fernando',
        apellido: 'Martinez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Cobija',
            zona: 'Zona Oeste',
            direccion: 'Calle Comercio 606'
        },
        fotoperfil: 9,
        timestamp: new Date('2023-01-09T10:00:00Z')
    },
    {
        _id: 10,
        usuarioId: 10,
        nombre: 'Laura',
        apellido: 'Torrez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'El Alto',
            zona: 'Villa Adela',
            direccion: 'Calle 2 707'
        },
        fotoperfil: 10,
        timestamp: new Date('2023-01-10T10:00:00Z')
    },
    {
        _id: 11,
        usuarioId: 11,
        nombre: 'Miguel',
        apellido: 'Ortiz',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Montero',
            zona: 'Zona Central',
            direccion: 'Calle 5 808'
        },
        fotoperfil: 11,
        timestamp: new Date('2023-01-11T10:00:00Z')
    },
    {
        _id: 12,
        usuarioId: 12,
        nombre: 'Martha',
        apellido: 'Suarez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Quillacollo',
            zona: 'Zona Este',
            direccion: 'Calle Cochabamba 909'
        },
        fotoperfil: 12,
        timestamp: new Date('2023-01-12T10:00:00Z')
    },
    {
        _id: 13,
        usuarioId: 13,
        nombre: 'Ricardo',
        apellido: 'Rojas',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Yacuiba',
            zona: 'Zona Norte',
            direccion: 'Calle Yacuiba 1010'
        },
        fotoperfil: 13,
        timestamp: new Date('2023-01-13T10:00:00Z')
    },
    {
        _id: 14,
        usuarioId: 14,
        nombre: 'Veronica',
        apellido: 'Rivas',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Huanuni',
            zona: 'Zona Oeste',
            direccion: 'Calle Huanuni 1111'
        },
        fotoperfil: 14,
        timestamp: new Date('2023-01-14T10:00:00Z')
    },
    {
        _id: 15,
        usuarioId: 15,
        nombre: 'Oscar',
        apellido: 'Vargas',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Uyuni',
            zona: 'Zona Centro',
            direccion: 'Calle Uyuni 1212'
        },
        fotoperfil: 15,
        timestamp: new Date('2023-01-15T10:00:00Z')
    },
    {
        _id: 16,
        usuarioId: 16,
        nombre: 'Natalia',
        apellido: 'Gutierrez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Riberalta',
            zona: 'Zona Sur',
            direccion: 'Calle Beni 1313'
        },
        fotoperfil: 16,
        timestamp: new Date('2023-01-16T10:00:00Z')
    },
    {
        _id: 17,
        usuarioId: 17,
        nombre: 'Ivan',
        apellido: 'Flores',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Monteagudo',
            zona: 'Zona Norte',
            direccion: 'Calle Monteagudo 1414'
        },
        fotoperfil: 17,
        timestamp: new Date('2023-01-17T10:00:00Z')
    },
    {
        _id: 18,
        usuarioId: 18,
        nombre: 'Claudia',
        apellido: 'Vega',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Porvenir',
            zona: 'Zona Oeste',
            direccion: 'Calle Porvenir 1515'
        },
        fotoperfil: 18,
        timestamp: new Date('2023-01-18T10:00:00Z')
    },
    {
        _id: 19,
        usuarioId: 19,
        nombre: 'Victor',
        apellido: 'Aguirre',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'Viacha',
            zona: 'Zona Centro',
            direccion: 'Calle Viacha 1616'
        },
        fotoperfil: 19,
        timestamp: new Date('2023-01-19T10:00:00Z')
    },
    {
        _id: 20,
        usuarioId: 20,
        nombre: 'Elena',
        apellido: 'Cortez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'San Ignacio',
            zona: 'Zona Norte',
            direccion: 'Calle San Ignacio 1717'
        },
        fotoperfil: 20,
        timestamp: new Date('2023-01-20T10:00:00Z')
    },
    {
        _id: 21,
        usuarioId: 21,
        nombre: 'Raul',
        apellido: 'Salazar',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Sacaba',
            zona: 'Zona Este',
            direccion: 'Calle Sacaba 1818'
        },
        fotoperfil: 21,
        timestamp: new Date('2023-01-21T10:00:00Z')
    },
    {
        _id: 22,
        usuarioId: 22,
        nombre: 'Patricia',
        apellido: 'Nina',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Bermejo',
            zona: 'Zona Sur',
            direccion: 'Calle Bermejo 1919'
        },
        fotoperfil: 22,
        timestamp: new Date('2023-01-22T10:00:00Z')
    },
    {
        _id: 23,
        usuarioId: 23,
        nombre: 'Javier',
        apellido: 'Loayza',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Challapata',
            zona: 'Zona Norte',
            direccion: 'Calle Challapata 2020'
        },
        fotoperfil: 23,
        timestamp: new Date('2023-01-23T10:00:00Z')
    },
    {
        _id: 24,
        usuarioId: 24,
        nombre: 'Karen',
        apellido: 'Arce',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Tupiza',
            zona: 'Zona Centro',
            direccion: 'Calle Tupiza 2121'
        },
        fotoperfil: 24,
        timestamp: new Date('2023-01-24T10:00:00Z')
    },
    {
        _id: 25,
        usuarioId: 25,
        nombre: 'Eduardo',
        apellido: 'Duran',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'San Borja',
            zona: 'Zona Oeste',
            direccion: 'Calle San Borja 2222'
        },
        fotoperfil: 25,
        timestamp: new Date('2023-01-25T10:00:00Z')
    },
    {
        _id: 26,
        usuarioId: 26,
        nombre: 'Lucia',
        apellido: 'Espinoza',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Camargo',
            zona: 'Zona Este',
            direccion: 'Calle Camargo 2323'
        },
        fotoperfil: 26,
        timestamp: new Date('2023-01-26T10:00:00Z')
    },
    {
        _id: 27,
        usuarioId: 27,
        nombre: 'Alfredo',
        apellido: 'Serrano',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Filadelfia',
            zona: 'Zona Sur',
            direccion: 'Calle Filadelfia 2424'
        },
        fotoperfil: 27,
        timestamp: new Date('2023-01-27T10:00:00Z')
    },
    {
        _id: 28,
        usuarioId: 28,
        nombre: 'Isabel',
        apellido: 'Molina',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'Achacachi',
            zona: 'Zona Norte',
            direccion: 'Calle Achacachi 2525'
        },
        fotoperfil: 28,
        timestamp: new Date('2023-01-28T10:00:00Z')
    },
    {
        _id: 29,
        usuarioId: 29,
        nombre: 'Mauricio',
        apellido: 'Galindo',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Cotoca',
            zona: 'Zona Oeste',
            direccion: 'Calle Cotoca 2626'
        },
        fotoperfil: 29,
        timestamp: new Date('2023-01-29T10:00:00Z')
    },
    {
        _id: 30,
        usuarioId: 30,
        nombre: 'Gabriela',
        apellido: 'Alvarez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Punata',
            zona: 'Zona Centro',
            direccion: 'Calle Punata 2727'
        },
        fotoperfil: 30,
        timestamp: new Date('2023-01-30T10:00:00Z')
    },
    {
        _id: 31,
        usuarioId: 31,
        nombre: 'Diego',
        apellido: 'Montano',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Villa Montes',
            zona: 'Zona Norte',
            direccion: 'Calle Villa Montes 2828'
        },
        fotoperfil: 31,
        timestamp: new Date('2023-01-31T10:00:00Z')
    },
    {
        _id: 32,
        usuarioId: 32,
        nombre: 'Rocio',
        apellido: 'Chavez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Oruro',
            zona: 'Zona Sur',
            direccion: 'Calle Oruro 2929'
        },
        fotoperfil: 32,
        timestamp: new Date('2023-02-01T10:00:00Z')
    },
    {
        _id: 33,
        usuarioId: 33,
        nombre: 'Rodrigo',
        apellido: 'Rios',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Potosí',
            zona: 'Zona Norte',
            direccion: 'Calle Potosí 3030'
        },
        fotoperfil: 33,
        timestamp: new Date('2023-02-02T10:00:00Z')
    },
    {
        _id: 34,
        usuarioId: 34,
        nombre: 'Silvia',
        apellido: 'Navarro',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Trinidad',
            zona: 'Zona Oeste',
            direccion: 'Calle Trinidad 3131'
        },
        fotoperfil: 34,
        timestamp: new Date('2023-02-03T10:00:00Z')
    },
    {
        _id: 35,
        usuarioId: 35,
        nombre: 'Hector',
        apellido: 'Peña',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Sucre',
            zona: 'Zona Centro',
            direccion: 'Calle Sucre 3232'
        },
        fotoperfil: 35,
        timestamp: new Date('2023-02-04T10:00:00Z')
    },
    {
        _id: 36,
        usuarioId: 36,
        nombre: 'Gloria',
        apellido: 'Padilla',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Cobija',
            zona: 'Zona Norte',
            direccion: 'Calle Cobija 3333'
        },
        fotoperfil: 36,
        timestamp: new Date('2023-02-05T10:00:00Z')
    },
    {
        _id: 37,
        usuarioId: 37,
        nombre: 'Raquel',
        apellido: 'Vera',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'La Paz',
            zona: 'Zona Sur',
            direccion: 'Calle La Paz 3434'
        },
        fotoperfil: 37,
        timestamp: new Date('2023-02-06T10:00:00Z')
    },
    {
        _id: 38,
        usuarioId: 38,
        nombre: 'Ruben',
        apellido: 'Saavedra',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Santa Cruz de la Sierra',
            zona: 'Zona Norte',
            direccion: 'Calle Santa Cruz 3535'
        },
        fotoperfil: 38,
        timestamp: new Date('2023-02-07T10:00:00Z')
    },
    {
        _id: 39,
        usuarioId: 39,
        nombre: 'Sofia',
        apellido: 'Guzman',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Cochabamba',
            zona: 'Zona Centro',
            direccion: 'Calle Cochabamba 3636'
        },
        fotoperfil: 39,
        timestamp: new Date('2023-02-08T10:00:00Z')
    },
    {
        _id: 40,
        usuarioId: 40,
        nombre: 'Daniel',
        apellido: 'Quiroga',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Tarija',
            zona: 'Zona Norte',
            direccion: 'Calle Tarija 3737'
        },
        fotoperfil: 40,
        timestamp: new Date('2023-02-09T10:00:00Z')
    },
    {
        _id: 41,
        usuarioId: 41,
        nombre: 'Monica',
        apellido: 'Ibarra',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Oruro',
            zona: 'Zona Oeste',
            direccion: 'Calle Oruro 3838'
        },
        fotoperfil: 41,
        timestamp: new Date('2023-02-10T10:00:00Z')
    },
    {
        _id: 42,
        usuarioId: 42,
        nombre: 'Alvaro',
        apellido: 'Arias',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Potosí',
            zona: 'Zona Este',
            direccion: 'Calle Potosí 3939'
        },
        fotoperfil: 42,
        timestamp: new Date('2023-02-11T10:00:00Z')
    },
    {
        _id: 43,
        usuarioId: 43,
        nombre: 'Lorena',
        apellido: 'Sosa',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Trinidad',
            zona: 'Zona Centro',
            direccion: 'Calle Trinidad 4040'
        },
        fotoperfil: 43,
        timestamp: new Date('2023-02-12T10:00:00Z')
    },
    {
        _id: 44,
        usuarioId: 44,
        nombre: 'Gerardo',
        apellido: 'Campos',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Sucre',
            zona: 'Zona Norte',
            direccion: 'Calle Sucre 4141'
        },
        fotoperfil: 44,
        timestamp: new Date('2023-02-13T10:00:00Z')
    },
    {
        _id: 45,
        usuarioId: 45,
        nombre: 'Paola',
        apellido: 'Maldonado',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Cobija',
            zona: 'Zona Este',
            direccion: 'Calle Cobija 4242'
        },
        fotoperfil: 45,
        timestamp: new Date('2023-02-14T10:00:00Z')
    },
    {
        _id: 46,
        usuarioId: 46,
        nombre: 'Guillermo',
        apellido: 'Vargas',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'La Paz',
            zona: 'Zona Sur',
            direccion: 'Calle La Paz 4343'
        },
        fotoperfil: 46,
        timestamp: new Date('2023-02-15T10:00:00Z')
    },
    {
        _id: 47,
        usuarioId: 47,
        nombre: 'Vanessa',
        apellido: 'Jimenez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Santa Cruz de la Sierra',
            zona: 'Zona Norte',
            direccion: 'Calle Santa Cruz 4444'
        },
        fotoperfil: 47,
        timestamp: new Date('2023-02-16T10:00:00Z')
    },
    {
        _id: 48,
        usuarioId: 48,
        nombre: 'Cesar',
        apellido: 'Mejia',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Cochabamba',
            zona: 'Zona Centro',
            direccion: 'Calle Cochabamba 4545'
        },
        fotoperfil: 48,
        timestamp: new Date('2023-02-17T10:00:00Z')
    },
    {
        _id: 49,
        usuarioId: 49,
        nombre: 'Ines',
        apellido: 'Reyes',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Tarija',
            zona: 'Zona Norte',
            direccion: 'Calle Tarija 4646'
        },
        fotoperfil: 49,
        timestamp: new Date('2023-02-18T10:00:00Z')
    },
    {
        _id: 50,
        usuarioId: 50,
        nombre: 'Alex',
        apellido: 'Villarroel',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Oruro',
            zona: 'Zona Oeste',
            direccion: 'Calle Oruro 4747'
        },
        fotoperfil: 50,
        timestamp: new Date('2023-02-19T10:00:00Z')
    },
    {
        _id: 51,
        usuarioId: 51,
        nombre: 'Camila',
        apellido: 'Castro',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Potosí',
            zona: 'Zona Este',
            direccion: 'Calle Potosí 4848'
        },
        fotoperfil: 51,
        timestamp: new Date('2023-02-20T10:00:00Z')
    },
    {
        _id: 52,
        usuarioId: 52,
        nombre: 'Juan',
        apellido: 'Marquez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Trinidad',
            zona: 'Zona Centro',
            direccion: 'Calle Trinidad 4949'
        },
        fotoperfil: 52,
        timestamp: new Date('2023-02-21T10:00:00Z')
    },
    {
        _id: 53,
        usuarioId: 53,
        nombre: 'Karina',
        apellido: 'Garcia',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Sucre',
            zona: 'Zona Norte',
            direccion: 'Calle Sucre 5050'
        },
        fotoperfil: 53,
        timestamp: new Date('2023-02-22T10:00:00Z')
    },
    {
        _id: 54,
        usuarioId: 54,
        nombre: 'Julio',
        apellido: 'Perez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Cobija',
            zona: 'Zona Este',
            direccion: 'Calle Cobija 5151'
        },
        fotoperfil: 54,
        timestamp: new Date('2023-02-23T10:00:00Z')
    },
    {
        _id: 55,
        usuarioId: 55,
        nombre: 'Pablo',
        apellido: 'Flores',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'La Paz',
            zona: 'Zona Sur',
            direccion: 'Calle La Paz 5252'
        },
        fotoperfil: 55,
        timestamp: new Date('2023-02-24T10:00:00Z')
    },
    {
        _id: 56,
        usuarioId: 56,
        nombre: 'Clara',
        apellido: 'Rios',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Santa Cruz de la Sierra',
            zona: 'Zona Norte',
            direccion: 'Calle Santa Cruz 5353'
        },
        fotoperfil: 56,
        timestamp: new Date('2023-02-25T10:00:00Z')
    },
    {
        _id: 57,
        usuarioId: 57,
        nombre: 'Roberto',
        apellido: 'Sanchez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Cochabamba',
            zona: 'Zona Centro',
            direccion: 'Calle Cochabamba 5454'
        },
        fotoperfil: 57,
        timestamp: new Date('2023-02-26T10:00:00Z')
    },
    {
        _id: 58,
        usuarioId: 58,
        nombre: 'Estela',
        apellido: 'Mendoza',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Tarija',
            zona: 'Zona Norte',
            direccion: 'Calle Tarija 5555'
        },
        fotoperfil: 58,
        timestamp: new Date('2023-02-27T10:00:00Z')
    },
    {
        _id: 59,
        usuarioId: 59,
        nombre: 'Luis',
        apellido: 'Ortiz',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Oruro',
            zona: 'Zona Oeste',
            direccion: 'Calle Oruro 5656'
        },
        fotoperfil: 59,
        timestamp: new Date('2023-02-28T10:00:00Z')
    },
    {
        _id: 60,
        usuarioId: 60,
        nombre: 'Gabriela',
        apellido: 'Mamani',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Potosí',
            zona: 'Zona Este',
            direccion: 'Calle Potosí 5757'
        },
        fotoperfil: 60,
        timestamp: new Date('2023-03-01T10:00:00Z')
    },
    {
        _id: 61,
        usuarioId: 61,
        nombre: 'Diego',
        apellido: 'Alvarez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Trinidad',
            zona: 'Zona Centro',
            direccion: 'Calle Trinidad 5858'
        },
        fotoperfil: 61,
        timestamp: new Date('2023-03-02T10:00:00Z')
    },
    {
        _id: 62,
        usuarioId: 62,
        nombre: 'Mariana',
        apellido: 'Rivera',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Sucre',
            zona: 'Zona Norte',
            direccion: 'Calle Sucre 5959'
        },
        fotoperfil: 62,
        timestamp: new Date('2023-03-03T10:00:00Z')
    },
    {
        _id: 63,
        usuarioId: 63,
        nombre: 'Ricardo',
        apellido: 'Romero',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Cobija',
            zona: 'Zona Este',
            direccion: 'Calle Cobija 6060'
        },
        fotoperfil: 63,
        timestamp: new Date('2023-03-04T10:00:00Z')
    },
    {
        _id: 64,
        usuarioId: 64,
        nombre: 'Lucia',
        apellido: 'Guzman',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'La Paz',
            zona: 'Zona Sur',
            direccion: 'Calle La Paz 6161'
        },
        fotoperfil: 64,
        timestamp: new Date('2023-03-05T10:00:00Z')
    },
    {
        _id: 65,
        usuarioId: 65,
        nombre: 'Jorge',
        apellido: 'Castillo',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Santa Cruz de la Sierra',
            zona: 'Zona Norte',
            direccion: 'Calle Santa Cruz 6262'
        },
        fotoperfil: 65,
        timestamp: new Date('2023-03-06T10:00:00Z')
    },
    {
        _id: 66,
        usuarioId: 66,
        nombre: 'Andrea',
        apellido: 'Miranda',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Cochabamba',
            zona: 'Zona Centro',
            direccion: 'Calle Cochabamba 6363'
        },
        fotoperfil: 66,
        timestamp: new Date('2023-03-07T10:00:00Z')
    },
    {
        _id: 67,
        usuarioId: 67,
        nombre: 'Fernando',
        apellido: 'Paz',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Tarija',
            zona: 'Zona Norte',
            direccion: 'Calle Tarija 6464'
        },
        fotoperfil: 67,
        timestamp: new Date('2023-03-08T10:00:00Z')
    },
    {
        _id: 68,
        usuarioId: 68,
        nombre: 'Laura',
        apellido: 'Gonzalez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Oruro',
            zona: 'Zona Oeste',
            direccion: 'Calle Oruro 6565'
        },
        fotoperfil: 68,
        timestamp: new Date('2023-03-09T10:00:00Z')
    },
    {
        _id: 69,
        usuarioId: 69,
        nombre: 'Enrique',
        apellido: 'Jimenez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Potosí',
            zona: 'Zona Este',
            direccion: 'Calle Potosí 6666'
        },
        fotoperfil: 69,
        timestamp: new Date('2023-03-10T10:00:00Z')
    },
    {
        _id: 70,
        usuarioId: 70,
        nombre: 'Gloria',
        apellido: 'Lopez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Trinidad',
            zona: 'Zona Centro',
            direccion: 'Calle Trinidad 6767'
        },
        fotoperfil: 70,
        timestamp: new Date('2023-03-11T10:00:00Z')
    },
    {
        _id: 71,
        usuarioId: 71,
        nombre: 'Victor',
        apellido: 'Hernandez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Sucre',
            zona: 'Zona Norte',
            direccion: 'Calle Sucre 6868'
        },
        fotoperfil: 71,
        timestamp: new Date('2023-03-12T10:00:00Z')
    },
    {
        _id: 72,
        usuarioId: 72,
        nombre: 'Natalia',
        apellido: 'Cruz',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Cobija',
            zona: 'Zona Este',
            direccion: 'Calle Cobija 6969'
        },
        fotoperfil: 72,
        timestamp: new Date('2023-03-13T10:00:00Z')
    },
    {
        _id: 73,
        usuarioId: 73,
        nombre: 'Sergio',
        apellido: 'Ortiz',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'La Paz',
            zona: 'Zona Sur',
            direccion: 'Calle La Paz 7070'
        },
        fotoperfil: 73,
        timestamp: new Date('2023-03-14T10:00:00Z')
    },
    {
        _id: 74,
        usuarioId: 74,
        nombre: 'Mariana',
        apellido: 'Salazar',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Santa Cruz de la Sierra',
            zona: 'Zona Norte',
            direccion: 'Calle Santa Cruz 7171'
        },
        fotoperfil: 74,
        timestamp: new Date('2023-03-15T10:00:00Z')
    },
    {
        _id: 75,
        usuarioId: 75,
        nombre: 'Francisco',
        apellido: 'Mendoza',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Cochabamba',
            zona: 'Zona Centro',
            direccion: 'Calle Cochabamba 7272'
        },
        fotoperfil: 75,
        timestamp: new Date('2023-03-16T10:00:00Z')
    },
    {
        _id: 76,
        usuarioId: 76,
        nombre: 'Cristina',
        apellido: 'Lopez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Tarija',
            zona: 'Zona Norte',
            direccion: 'Calle Tarija 7373'
        },
        fotoperfil: 76,
        timestamp: new Date('2023-03-17T10:00:00Z')
    },
    {
        _id: 77,
        usuarioId: 77,
        nombre: 'Oscar',
        apellido: 'Perez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Oruro',
            zona: 'Zona Oeste',
            direccion: 'Calle Oruro 7474'
        },
        fotoperfil: 77,
        timestamp: new Date('2023-03-18T10:00:00Z')
    },
    {
        _id: 78,
        usuarioId: 78,
        nombre: 'Ana',
        apellido: 'Reyes',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Potosí',
            zona: 'Zona Este',
            direccion: 'Calle Potosí 7575'
        },
        fotoperfil: 78,
        timestamp: new Date('2023-03-19T10:00:00Z')
    },
    {
        _id: 79,
        usuarioId: 79,
        nombre: 'Carlos',
        apellido: 'Mendoza',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Trinidad',
            zona: 'Zona Centro',
            direccion: 'Calle Trinidad 7676'
        },
        fotoperfil: 79,
        timestamp: new Date('2023-03-20T10:00:00Z')
    },
    {
        _id: 80,
        usuarioId: 80,
        nombre: 'Fernanda',
        apellido: 'Ortiz',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Sucre',
            zona: 'Zona Norte',
            direccion: 'Calle Sucre 7777'
        },
        fotoperfil: 80,
        timestamp: new Date('2023-03-21T10:00:00Z')
    },
    {
        _id: 81,
        usuarioId: 81,
        nombre: 'Luis',
        apellido: 'Castillo',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Cobija',
            zona: 'Zona Este',
            direccion: 'Calle Cobija 7878'
        },
        fotoperfil: 81,
        timestamp: new Date('2023-03-22T10:00:00Z')
    },
    {
        _id: 82,
        usuarioId: 82,
        nombre: 'Martina',
        apellido: 'Garcia',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'La Paz',
            zona: 'Zona Sur',
            direccion: 'Calle La Paz 7979'
        },
        fotoperfil: 82,
        timestamp: new Date('2023-03-23T10:00:00Z')
    },
    {
        _id: 83,
        usuarioId: 83,
        nombre: 'Victor',
        apellido: 'Rojas',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Santa Cruz de la Sierra',
            zona: 'Zona Norte',
            direccion: 'Calle Santa Cruz 8080'
        },
        fotoperfil: 83,
        timestamp: new Date('2023-03-24T10:00:00Z')
    },
    {
        _id: 84,
        usuarioId: 84,
        nombre: 'Camila',
        apellido: 'Martinez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Cochabamba',
            zona: 'Zona Centro',
            direccion: 'Calle Cochabamba 8181'
        },
        fotoperfil: 84,
        timestamp: new Date('2023-03-25T10:00:00Z')
    },
    {
        _id: 85,
        usuarioId: 85,
        nombre: 'Julio',
        apellido: 'Sanchez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Tarija',
            zona: 'Zona Norte',
            direccion: 'Calle Tarija 8282'
        },
        fotoperfil: 85,
        timestamp: new Date('2023-03-26T10:00:00Z')
    },
    {
        _id: 86,
        usuarioId: 86,
        nombre: 'Marta',
        apellido: 'Flores',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Oruro',
            zona: 'Zona Oeste',
            direccion: 'Calle Oruro 8383'
        },
        fotoperfil: 86,
        timestamp: new Date('2023-03-27T10:00:00Z')
    },
    {
        _id: 87,
        usuarioId: 87,
        nombre: 'Hugo',
        apellido: 'Perez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Potosí',
            zona: 'Zona Este',
            direccion: 'Calle Potosí 8484'
        },
        fotoperfil: 87,
        timestamp: new Date('2023-03-28T10:00:00Z')
    },
    {
        _id: 88,
        usuarioId: 88,
        nombre: 'Rosa',
        apellido: 'Garcia',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Trinidad',
            zona: 'Zona Centro',
            direccion: 'Calle Trinidad 8585'
        },
        fotoperfil: 88,
        timestamp: new Date('2023-03-29T10:00:00Z')
    },
    {
        _id: 89,
        usuarioId: 89,
        nombre: 'David',
        apellido: 'Hernandez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Sucre',
            zona: 'Zona Norte',
            direccion: 'Calle Sucre 8686'
        },
        fotoperfil: 89,
        timestamp: new Date('2023-03-30T10:00:00Z')
    },
    {
        _id: 90,
        usuarioId: 90,
        nombre: 'Monica',
        apellido: 'Lopez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Cobija',
            zona: 'Zona Este',
            direccion: 'Calle Cobija 8787'
        },
        fotoperfil: 90,
        timestamp: new Date('2023-03-31T10:00:00Z')
    },
    {
        _id: 91,
        usuarioId: 91,
        nombre: 'Carlos',
        apellido: 'Rodriguez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'La Paz',
            zona: 'Zona Sur',
            direccion: 'Calle La Paz 8888'
        },
        fotoperfil: 91,
        timestamp: new Date('2023-04-01T10:00:00Z')
    },
    {
        _id: 92,
        usuarioId: 92,
        nombre: 'Paula',
        apellido: 'Martinez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Santa Cruz',
            ciudad: 'Santa Cruz de la Sierra',
            zona: 'Zona Norte',
            direccion: 'Calle Santa Cruz 8989'
        },
        fotoperfil: 92,
        timestamp: new Date('2023-04-02T10:00:00Z')
    },
    {
        _id: 93,
        usuarioId: 93,
        nombre: 'Jose',
        apellido: 'Gomez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Cochabamba',
            ciudad: 'Cochabamba',
            zona: 'Zona Centro',
            direccion: 'Calle Cochabamba 9090'
        },
        fotoperfil: 93,
        timestamp: new Date('2023-04-03T10:00:00Z')
    },
    {
        _id: 94,
        usuarioId: 94,
        nombre: 'Adriana',
        apellido: 'Reyes',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Tarija',
            ciudad: 'Tarija',
            zona: 'Zona Norte',
            direccion: 'Calle Tarija 9191'
        },
        fotoperfil: 94,
        timestamp: new Date('2023-04-04T10:00:00Z')
    },
    {
        _id: 95,
        usuarioId: 95,
        nombre: 'Gustavo',
        apellido: 'Mendez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Oruro',
            ciudad: 'Oruro',
            zona: 'Zona Oeste',
            direccion: 'Calle Oruro 9292'
        },
        fotoperfil: 95,
        timestamp: new Date('2023-04-05T10:00:00Z')
    },
    {
        _id: 96,
        usuarioId: 96,
        nombre: 'Patricia',
        apellido: 'Lopez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Potosí',
            ciudad: 'Potosí',
            zona: 'Zona Este',
            direccion: 'Calle Potosí 9393'
        },
        fotoperfil: 96,
        timestamp: new Date('2023-04-06T10:00:00Z')
    },
    {
        _id: 97,
        usuarioId: 97,
        nombre: 'Javier',
        apellido: 'Gonzalez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Beni',
            ciudad: 'Trinidad',
            zona: 'Zona Centro',
            direccion: 'Calle Trinidad 9494'
        },
        fotoperfil: 97,
        timestamp: new Date('2023-04-07T10:00:00Z')
    },
    {
        _id: 98,
        usuarioId: 98,
        nombre: 'Daniela',
        apellido: 'Gomez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Chuquisaca',
            ciudad: 'Sucre',
            zona: 'Zona Norte',
            direccion: 'Calle Sucre 9595'
        },
        fotoperfil: 98,
        timestamp: new Date('2023-04-08T10:00:00Z')
    },
    {
        _id: 99,
        usuarioId: 99,
        nombre: 'Juan',
        apellido: 'Rodriguez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'Pando',
            ciudad: 'Cobija',
            zona: 'Zona Este',
            direccion: 'Calle Cobija 9696'
        },
        fotoperfil: 99,
        timestamp: new Date('2023-04-09T10:00:00Z')
    },
    {
        _id: 100,
        usuarioId: 100,
        nombre: 'Marcela',
        apellido: 'Jimenez',
        residencia: {
            pais: 'Bolivia',
            departamento: 'La Paz',
            ciudad: 'La Paz',
            zona: 'Zona Sur',
            direccion: 'Calle La Paz 9797'
        },
        fotoperfil: 100,
        timestamp: new Date('2023-04-10T10:00:00Z')
    }
]);
use('turismoBolivia')
db.usuarios.createIndex( { "usuarioId" : 1 }, { unique : true } )

use('turismoBolivia')
db.atraccionesTuristicas.insertMany([
    {
        _id: 1,
        atraccionTuristicaId: 1,
        nombreDepartamento: "La Paz",
        nombre: 'Teleférico rojo',
        fotoPrincipal: '1LP',
        fotos: ['1LP1','1LP2','1LP3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 2,
        atraccionTuristicaId: 2,
        nombreDepartamento: "La Paz",
        nombre: 'Valle de la Luna',
        fotoPrincipal: '2LP',
        fotos: ['2LP1','2LP2','2LP3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 3,
        atraccionTuristicaId: 3,
        nombreDepartamento: "La Paz",
        nombre: 'Isla del Sol',
        fotoPrincipal: '3LP',
        fotos: ['3LP1','3LP2','3LP3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 4,
        atraccionTuristicaId: 4,
        nombreDepartamento: "La Paz",
        nombre: 'Complejo Arqueológico de Tiwanaku',
        fotoPrincipal: '4LP',
        fotos: ['4LP1','4LP2','4LP3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 5,
        atraccionTuristicaId: 5,
        nombreDepartamento: "Oruro",
        nombre: 'Carnaval de Oruro',
        fotoPrincipal: '5O',
        fotos: ['5O1','5O2','5O3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 6,
        atraccionTuristicaId: 6,
        nombreDepartamento: "Oruro",
        nombre: 'Mina San José',
        fotoPrincipal: '6O',
        fotos: ['6O1','6O2','6O3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 7,
        atraccionTuristicaId: 7,
        nombreDepartamento: "Oruro",
        nombre: 'Salar de Coipasa',
        fotoPrincipal: '7O',
        fotos: ['7O1','7O2','7O3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 8,
        atraccionTuristicaId: 8,
        nombreDepartamento: "Oruro",
        nombre: 'Museo Nacional de Etnografía y Folklore',
        fotoPrincipal: '8O',
        fotos: ['8O1','8O2','8O3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 9,
        atraccionTuristicaId: 9,
        nombreDepartamento: "Potosí",
        nombre: 'Cerro Rico',
        fotoPrincipal: '9P',
        fotos: ['9P1','9P2','9P3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 10,
        atraccionTuristicaId: 10,
        nombreDepartamento: "Potosí",
        nombre: 'Casa Nacional de la Moneda',
        fotoPrincipal: '10P',
        fotos: ['10P1','10P2','10P3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 11,
        atraccionTuristicaId: 11,
        nombreDepartamento: "Potosí",
        nombre: 'Laguna Colorada',
        fotoPrincipal: '11P',
        fotos: ['11P1','11P2','11P3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 12,
        atraccionTuristicaId: 12,
        nombreDepartamento: "Chuquisaca",
        nombre: 'Casa de la Libertad',
        fotoPrincipal: '12C',
        fotos: ['12C1','12C2','12C3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 13,
        atraccionTuristicaId: 13,
        nombreDepartamento: "Chuquisaca",
        nombre: 'Parque Cretácico',
        fotoPrincipal: '13C',
        fotos: ['13C1','13C2','13C3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 14,
        atraccionTuristicaId: 14,
        nombreDepartamento: "Chuquisaca",
        nombre: 'Plaza 25 de Mayo',
        fotoPrincipal: '14C',
        fotos: ['14C1','14C2','14C3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 15,
        atraccionTuristicaId: 15,
        nombreDepartamento: "Tarija",
        nombre: 'Valle de la Concepción',
        fotoPrincipal: '15T',
        fotos: ['15T1','15T2','15T3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 16,
        atraccionTuristicaId: 16,
        nombreDepartamento: "Tarija",
        nombre: 'Parque Nacional Aguaragüe',
        fotoPrincipal: '16T',
        fotos: ['16T1','16T2','16T3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 17,
        atraccionTuristicaId: 17,
        nombreDepartamento: "Tarija",
        nombre: 'Represa de San Jacinto',
        fotoPrincipal: '17T',
        fotos: ['17T1','17T2','17T3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 18,
        atraccionTuristicaId: 18,
        nombreDepartamento: "Cochabamba",
        nombre: 'Cristo de la Concordia',
        fotoPrincipal: '18C',
        fotos: ['18C1','18C2','18C3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 19,
        atraccionTuristicaId: 19,
        nombreDepartamento: "Cochabamba",
        nombre: 'Lago Corani',
        fotoPrincipal: '19C',
        fotos: ['19C1','19C2','19C3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 20,
        atraccionTuristicaId: 20,
        nombreDepartamento: "Cochabamba",
        nombre: 'Parque Nacional Torotoro',
        fotoPrincipal: '20C',
        fotos: ['20C1','20C2','20C3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 21,
        atraccionTuristicaId: 21,
        nombreDepartamento: "Cochabamba",
        nombre: 'Laguna Alalay',
        fotoPrincipal: '21C',
        fotos: ['21C1','21C2','21C3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 22,
        atraccionTuristicaId: 22,
        nombreDepartamento: "Pando",
        nombre: 'Reserva Nacional Manuripi',
        fotoPrincipal: '22P',
        fotos: ['22P1','22P2','22P3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 23,
        atraccionTuristicaId: 23,
        nombreDepartamento: "Santa Cruz",
        nombre: 'Jardín Botánico de Santa Cruz',
        fotoPrincipal: '23SC',
        fotos: ['23SC1','23SC2','23SC3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 24,
        atraccionTuristicaId: 24,
        nombreDepartamento: "Santa Cruz",
        nombre: 'Plaza 24 de Septiembre',
        fotoPrincipal: '24SC',
        fotos: ['24SC1','24SC2','24SC3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 25,
        atraccionTuristicaId: 25,
        nombreDepartamento: "Santa Cruz",
        nombre: 'Parque Nacional Amboró',
        fotoPrincipal: '25SC',
        fotos: ['25SC1','25SC2','25SC3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 26,
        atraccionTuristicaId: 26,
        nombreDepartamento: "Santa Cruz",
        nombre: 'Jardín Botánico de Santa Cruz',
        fotoPrincipal: '26SC',
        fotos: ['26SC1','26SC2','26SC3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 27,
        atraccionTuristicaId: 27,
        nombreDepartamento: "Beni",
        nombre: 'Pampas del Yacuma',
        fotoPrincipal: '27B',
        fotos: ['27B1','27B2','27B3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 28,
        atraccionTuristicaId: 28,
        nombreDepartamento: "Beni",
        nombre: 'Parque Nacional Madidi',
        fotoPrincipal: '28B',
        fotos: ['28B1','28B2','28B3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 29,
        atraccionTuristicaId: 29,
        nombreDepartamento: "Beni",
        nombre: 'Feria de la Raza Brava',
        fotoPrincipal: '29B',
        fotos: ['29B1','29B2','29B3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 30,
        atraccionTuristicaId: 30,
        nombreDepartamento: "Pando",
        nombre: 'Reserva Nacional Manuripi',
        fotoPrincipal: '30P',
        fotos: ['30P1','30P2','30P3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 31,
        atraccionTuristicaId: 31,
        nombreDepartamento: "Pando",
        nombre: 'Lago Bay',
        fotoPrincipal: '31P',
        fotos: ['31P1','31P2','31P3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    },
    {
        _id: 32,
        atraccionTuristicaId: 32,
        nombreDepartamento: "Pando",
        nombre: 'Centro Urbano de Cobija',
        fotoPrincipal: '32P',
        fotos: ['32P1','32P2','32P3'],
        timestamp: new Date('2022-06-10T19:30:40+0000')
    }
]);
use('turismoBolivia')
db.atraccionesTuristicas.createIndex( { "atraccionTuristicaId" : 1 }, { unique : true } )

const textos = [
    "muy lindo", "excelente", "maravilloso", "increíble", "fabuloso", "espectacular",
    "divertido", "hermoso", "magnífico", "inolvidable", "fantástico", "precioso",
    "fenomenal", "sorprendente", "impresionante", "asombroso", "admirable", "bonito",
    "bello", "charming", "cool", "delightful", "elegant", "enchanting", "enjoyable",
    "excellent", "exceptional", "fascinating", "fun", "great", "impressive", "lovely"
];
for (let i = 501; i <= 1000; i++) {
    use('turismoBolivia')
    db.comentarios.insertOne({
        _id: i,
        usuarioId: Math.floor(Math.random() * 100) + 1,
        atraccionTuristicaId: Math.floor(Math.random() * 32) + 1,
        calificacion: Math.floor(Math.random() * 5) + 1,
        texto: textos[Math.floor(Math.random() * textos.length)],
        timestamp: '2024-06-10T19:30:40+0000'
    });
}
for (let i = 1; i <= 500; i++) {
    use('turismoBolivia')
    db.comentarios.insertOne({
        _id: i,
        usuarioId: Math.floor(Math.random() * 100) + 1,
        atraccionTuristicaId: Math.floor(Math.random() * 32) + 1,
        calificacion: Math.floor(Math.random() * 5) + 1,
        texto: textos[Math.floor(Math.random() * textos.length)],
        timestamp: '2022-06-10T19:30:40+0000'
    });
}

const textosRespuestas = [
    "si :)", "no :(", "tal vez", "claro", "por supuesto", "de acuerdo", "no estoy seguro",
    "quizás", "perfecto", "me encanta", "definitivamente", "no gracias", "puede ser",
    "estoy de acuerdo", "no lo creo", "sin duda", "eso es correcto", "lo siento",
    "lo intentaré", "seguramente", "me parece bien", "excelente idea", "no es posible",
    "genial", "está bien", "por qué no", "lo aprecio", "tal vez más tarde", "cuenta conmigo",
    "depende", "está claro", "no estoy de acuerdo", "buen punto", "veremos", "no hay problema",
    "eso espero", "en absoluto", "claro que sí", "con gusto", "qué bien", "me parece",
    "no puedo", "lo dudo", "así es", "en efecto", "ni hablar", "ni pensarlo", "sí, claro",
    "a lo mejor", "cómo no"
];

for (let i = 1; i <= 500; i++) {
    use('turismoBolivia')
    db.respuestas.insertOne({
        _id:i,
        usuarioId: Math.floor(Math.random() * 100) + 1,
        texto: textosRespuestas[Math.floor(Math.random() * textosRespuestas.length)],
        comentarioId: Math.floor(Math.random() * 500) + 1,
        timestamp:'2022-06-10T19:30:40+0000'
    });
}
for (let i = 501; i <= 1000; i++) {
    use('turismoBolivia')
    db.respuestas.insertOne({
        _id: i,
        usuarioId: Math.floor(Math.random() * 100) + 1,
        texto: textosRespuestas[Math.floor(Math.random() * textosRespuestas.length)],
        comentarioId: Math.floor(Math.random() * 500) + 501,
        timestamp: '2024-06-10T19:30:40+0000'
    });
}

use('turismoBolivia');
db.fotos.insertMany([
    { _id: '1LP', nombre: "foto1LP.png" },
    { _id: '2LP', nombre: "foto2LP.png" },
    { _id: '3LP', nombre: "foto3LP.png" },
    { _id: '4LP', nombre: "foto4LP.png" },
    { _id: '5O', nombre: "foto5O.png" },
    { _id: '6O', nombre: "foto6O.png" },
    { _id: '7O', nombre: "foto7O.png" },
    { _id: '8O', nombre: "foto8O.png" },
    { _id: '9P', nombre: "foto9P.png" },
    { _id: '10P', nombre: "foto10P.png" },
    { _id: '11P', nombre: "foto11P.png" },
    { _id: '12P', nombre: "foto12P.png" },
    { _id: '13C', nombre: "foto13C.png" },
    { _id: '14C', nombre: "foto14C.png" },
    { _id: '15C', nombre: "foto15C.png" },
    { _id: '16CH', nombre: "foto16CH.png" },
    { _id: '17CH', nombre: "foto17CH.png" },
    { _id: '18CH', nombre: "foto18CH.png" },
    { _id: '19CH', nombre: "foto19CH.png" },
    { _id: '20T', nombre: "foto20T.png" },
    { _id: '21T', nombre: "foto21T.png" },
    { _id: '22T', nombre: "foto22T.png" },
    { _id: '23SC', nombre: "foto23SC.png" },
    { _id: '24SC', nombre: "foto24SC.png" },
    { _id: '25SC', nombre: "foto25SC.png" },
    { _id: '26SC', nombre: "foto26SC.png" },
    { _id: '27B', nombre: "foto27B.png" },
    { _id: '28B', nombre: "foto28B.png" },
    { _id: '29B', nombre: "foto29B.png" },
    { _id: '30P', nombre: "foto30P.png" },
    { _id: '31P', nombre: "foto31P.png" },
    { _id: '32P', nombre: "foto32P.png" }
]);

use('turismoBolivia');
db.fotos.insertMany([
    { _id: '1LP1', nombre: "foto1LP1.png" },
    { _id: '1LP2', nombre: "foto1LP2.png" },
    { _id: '1LP3', nombre: "foto1LP3.png" },
    { _id: '2LP1', nombre: "foto2LP1.png" },
    { _id: '2LP2', nombre: "foto2LP2.png" },
    { _id: '2LP3', nombre: "foto2LP3.png" },
    { _id: '3LP1', nombre: "foto3LP1.png" },
    { _id: '3LP2', nombre: "foto3LP2.png" },
    { _id: '3LP3', nombre: "foto3LP3.png" },
    { _id: '4LP1', nombre: "foto4LP1.png" },
    { _id: '4LP2', nombre: "foto4LP2.png" },
    { _id: '4LP3', nombre: "foto4LP3.png" },
    { _id: '5O1', nombre: "foto5O1.png" },
    { _id: '5O2', nombre: "foto5O2.png" },
    { _id: '5O3', nombre: "foto5O3.png" },
    { _id: '6O1', nombre: "foto6O1.png" },
    { _id: '6O2', nombre: "foto6O2.png" },
    { _id: '6O3', nombre: "foto6O3.png" },
    { _id: '7O1', nombre: "foto7O1.png" },
    { _id: '7O2', nombre: "foto7O2.png" },
    { _id: '7O3', nombre: "foto7O3.png" },
    { _id: '8O1', nombre: "foto8O1.png" },
    { _id: '8O2', nombre: "foto8O2.png" },
    { _id: '8O3', nombre: "foto8O3.png" },
    { _id: '9P1', nombre: "foto9P1.png" },
    { _id: '9P2', nombre: "foto9P2.png" },
    { _id: '9P3', nombre: "foto9P3.png" },
    { _id: '10P1', nombre: "foto10P1.png" },
    { _id: '10P2', nombre: "foto10P2.png" },
    { _id: '10P3', nombre: "foto10P3.png" },
    { _id: '11P1', nombre: "foto11P1.png" },
    { _id: '11P2', nombre: "foto11P2.png" },
    { _id: '11P3', nombre: "foto11P3.png" },
    { _id: '12P1', nombre: "foto12P1.png" },
    { _id: '12P2', nombre: "foto12P2.png" },
    { _id: '12P3', nombre: "foto12P3.png" },
    { _id: '13C1', nombre: "foto13C1.png" },
    { _id: '13C2', nombre: "foto13C2.png" },
    { _id: '13C3', nombre: "foto13C3.png" },
    { _id: '14C1', nombre: "foto14C1.png" },
    { _id: '14C2', nombre: "foto14C2.png" },
    { _id: '14C3', nombre: "foto14C3.png" },
    { _id: '15C1', nombre: "foto15C1.png" },
    { _id: '15C2', nombre: "foto15C2.png" },
    { _id: '15C3', nombre: "foto15C3.png" },
    { _id: '16CH1', nombre: "foto16CH1.png" },
    { _id: '16CH2', nombre: "foto16CH2.png" },
    { _id: '16CH3', nombre: "foto16CH3.png" },
    { _id: '17CH1', nombre: "foto17CH1.png" },
    { _id: '17CH2', nombre: "foto17CH2.png" },
    { _id: '17CH3', nombre: "foto17CH3.png" },
    { _id: '18CH1', nombre: "foto18CH1.png" },
    { _id: '18CH2', nombre: "foto18CH2.png" },
    { _id: '18CH3', nombre: "foto18CH3.png" },
    { _id: '19CH1', nombre: "foto19CH1.png" },
    { _id: '19CH2', nombre: "foto19CH2.png" },
    { _id: '19CH3', nombre: "foto19CH3.png" },
    { _id: '20T1', nombre: "foto20T1.png" },
    { _id: '20T2', nombre: "foto20T2.png" },
    { _id: '20T3', nombre: "foto20T3.png" },
    { _id: '21T1', nombre: "foto21T1.png" },
    { _id: '21T2', nombre: "foto21T2.png" },
    { _id: '21T3', nombre: "foto21T3.png" },
    { _id: '22T1', nombre: "foto22T1.png" },
    { _id: '22T2', nombre: "foto22T2.png" },
    { _id: '22T3', nombre: "foto22T3.png" },
    { _id: '23SC1', nombre: "foto23SC1.png" },
    { _id: '23SC2', nombre: "foto23SC2.png" },
    { _id: '23SC3', nombre: "foto23SC3.png" },
    { _id: '24SC1', nombre: "foto24SC1.png" },
    { _id: '24SC2', nombre: "foto24SC2.png" },
    { _id: '24SC3', nombre: "foto24SC3.png" },
    { _id: '25SC1', nombre: "foto25SC1.png" },
    { _id: '25SC2', nombre: "foto25SC2.png" },
    { _id: '25SC3', nombre: "foto25SC3.png" },
    { _id: '26SC1', nombre: "foto26SC1.png" },
    { _id: '26SC2', nombre: "foto26SC2.png" },
    { _id: '26SC3', nombre: "foto26SC3.png" },
    { _id: '27B1', nombre: "foto27B1.png" },
    { _id: '27B2', nombre: "foto27B2.png" },
    { _id: '27B3', nombre: "foto27B3.png" },
    { _id: '28B1', nombre: "foto28B1.png" },
    { _id: '28B2', nombre: "foto28B2.png" },
    { _id: '28B3', nombre: "foto28B3.png" },
    { _id: '29B1', nombre: "foto29B1.png" },
    { _id: '29B2', nombre: "foto29B2.png" },
    { _id: '29B3', nombre: "foto29B3.png" },
    { _id: '30P1', nombre: "foto30P1.png" },
    { _id: '30P2', nombre: "foto30P2.png" },
    { _id: '30P3', nombre: "foto30P3.png" },
    { _id: '31P1', nombre: "foto31P1.png" },
    { _id: '31P2', nombre: "foto31P2.png" },
    { _id: '31P3', nombre: "foto31P3.png" },
    { _id: '32P1', nombre: "foto32P1.png" },
    { _id: '32P2', nombre: "foto32P2.png" },
    { _id: '32P3', nombre: "foto32P3.png" }
]);