/**
 * Todas las atracciones que un usuario ha calificado
 * Todas las atracciones que un usuario ha comentado
 */

/**
 * Todos los usuarios que han comentado en una atraccion
 */
use('turismoBolivia')
db.atraccionesTuristicas.aggregate([
    { $match:{
        _id:1
    } },{
        $lookup:{
            from:'fotos',
            localField:'fotoPrincipal',
            foreignField:'_id',
            as:'fotoPrincipalNombre'
        }
    },{
        $unwind: '$fotoPrincipalNombre'
    },{
        $lookup:{
            from:'fotos',
            localField:'fotos',
            foreignField:'_id',
            as:'fotosNombres'
        }
    },
    {
        $lookup:{
            from:'comentarios',
            localField:'_id',
            foreignField:'atraccionTuristicaId',
            as:'comentario'
        }
    },{
        $unwind:'$comentario'
    },{
        $lookup:{
            from:'usuarios',
            localField:'comentario.usuarioId',
            foreignField:'_id',
            as:'usuario'
        }
    },{
        $unwind:'$usuario'
    },{
        $lookup: {
            from: 'fotos',
            localField: 'usuario.fotoperfil',
            foreignField: '_id',
            as: 'fotoUsuarioComentario'
        }
    },
    { $unwind: '$fotoUsuarioComentario' },{
        $group:{
            _id:"$_id",
            atraccionTuristicaId: {$first: "$atraccionTuristicaId"},
            nombreDepartamento:{$first: "$nombreDepartamento"},
            nombre:{$first: "$nombre"},
            fotoPrincipal:{$first: "$fotoPrincipalNombre.nombre"},
            fotos:{$first: "$fotosNombres.nombre"},
            calificacionPromedio: {
                    $avg: '$comentario.calificacion'
            },
            comentarios:{
                $addToSet: {
                    usuario:"$usuario",
                    fotoUsuario:"$fotoUsuarioComentario",
                    calificacion:"$comentario.calificacion",
                    texto:"$comentario.texto",
                    timestamp:"$comentario.timestamp"
                }
            }
        }
    }
])

/**Calificacion promedio de una atraccion y foto principal*/
use('turismoBolivia')
db.atraccionesTuristicas.aggregate([
    {
        $lookup:{
            from:'fotos',
            localField:'fotoPrincipal',
            foreignField:'_id',
            as:'portada'
        }
    },{
        $unwind:"$portada"
    },{
        $lookup:{
            from:'comentarios',
            localField:'_id',
            foreignField:'atraccionTuristicaId',
            as:'comentarios'
        }
    },{
        $project: {
            atraccionTuristicaId: 1,
            nombreDepartamento: 1,
            nombre:1,
            portada:1,
            calificacionPromedio: {
                $round: [{
                    $avg: '$comentarios.calificacion'
                },2]
            }
        }
    },{
        $match: {
            calificacionPromedio: { $gte: 3, $lte: 5 }
        }
    }
])

/**Extraer datos para display de comentarios y respuestas de atraccion especifica*/
use('turismoBolivia')
db.atraccionesTuristicas.aggregate([
    {
      $match:{
        _id:1
      }  
    },{
        $lookup:{
            from:'fotos',
            localField:'fotos',
            foreignField:'_id',
            as:'fotosNombres'
        }
    },
    {
        $lookup: {
            from: 'comentarios',
            localField: '_id',
            foreignField: 'atraccionTuristicaId',
            as: 'comentarios'
        }
    },
    { $unwind: '$comentarios' },
    {
        $lookup: {
            from: 'usuarios',
            localField: 'comentarios.usuarioId',
            foreignField: '_id',
            as: 'usuarioComentario'
        }
    },
    { $unwind: '$usuarioComentario' },
    {
        $lookup: {
            from: 'fotos',
            localField: 'usuarioComentario.fotoperfil',
            foreignField: '_id',
            as: 'fotoUsuarioComentario'
        }
    },
    { $unwind: '$fotoUsuarioComentario' },
    {
        $lookup: {
            from: 'respuestas',
            localField: 'comentarios._id',
            foreignField: 'comentarioId',
            as: 'respuestas'
        }
    },
    { $unwind: '$respuestas' },
    {
        $lookup: {
            from: 'usuarios',
            localField: 'respuestas.usuarioId',
            foreignField: '_id',
            as: 'usuarioRespuesta'
        }
    },
    { $unwind: '$usuarioRespuesta' },
    {
        $lookup: {
            from: 'fotos',
            localField: 'usuarioRespuesta.fotoperfil',
            foreignField: '_id',
            as: 'fotoUsuarioRespuesta'
        }
    },
    { $unwind: '$fotoUsuarioRespuesta' },
    {
        $group: {
            _id: {
                atraccion: '$_id',
                comentario: '$comentarios._id'
            },
            atraccionTuristicaId: {$first: "$atraccionTuristicaId"},
            fotos:{$first: "$fotosNombres.nombre"},
            respuestas: { $addToSet: {
                usuario: { $concat: ["$usuarioRespuesta.nombre"," ", "$usuarioRespuesta.apellido"] },
                fotousuario: "$fotoUsuarioRespuesta.nombre",
                texto: "$respuestas.texto",
                timestamp: "$respuestas.timestamp"
            }},
            fotousuario: { $first: "$fotoUsuarioComentario.nombre" },
            calificacion: { $first: '$comentarios.calificacion' },
            usuario: { $first: { $concat: ["$usuarioComentario.nombre"," ", "$usuarioComentario.apellido"] } },
            texto: { $first: '$comentarios.texto' }
        }
    },{
        $group:{
            _id:"$_id.atraccion",
            atraccionTuristicaId: {$first: "$atraccionTuristicaId"},
            fotos:{$first: "$fotos"},
            comentarios:{
                $addToSet: {
                    fotousuario:"$fotousuario",
                    usuario:"$usuario",
                    calificacion:"$calificacion",
                    texto:"$texto",
                    timestamp:"$timestamp",
                    respuestas:"$respuestas"
                }
            }
        }
    }
])

/**Contar cantidad de comentarios y respuestas en atraccion*/
use('turismoBolivia')
db.atraccionesTuristicas.aggregate([
    {
        $lookup: {
            from: 'comentarios',
            localField: '_id',
            foreignField: 'atraccionTuristicaId',
            as: 'comentarios'
        }
    },
    { $unwind: '$comentarios' },
    {
        $lookup: {
            from: 'respuestas',
            localField: 'comentarios._id',
            foreignField: 'comentarioId',
            as: 'respuestas'
        }
    },
    { $unwind: '$respuestas' },
    {
        $group: {
            _id: {
                atraccion: '$_id',
                comentario: '$comentarios._id'
            },
            respuestas: { $sum: 1}
        }
    },{
        $group:{
            _id:"$_id.atraccion",
            comentarios:{
                $addToSet: {
                _id:"$_id.comentario",
                respuestas:"$respuestas"
            }
            }
        }
    },{
        $project:{
            comentarios:1,
            cantidadComentarios:{
                $size: "$comentarios"
            },
            respuestasTotales:{
                $sum: "$comentarios.respuestas"
            }
        }
    }
])

/**Cambiar foto de perfil */
use('turismoBolivia')
db.fotos.replaceOne(
    {_id: 1},
    {_id: 1, nombre:"nuevaFoto.png"}
)

// Todas las atracciones que un usuario ha calificado
use('turismoBolivia')
let userId = 1;
db.comentarios.aggregate([
    { $match: { usuarioId: userId } },
    {
        $lookup: {
            from: 'atraccionesTuristicas',
            localField: 'atraccionTuristicaId',
            foreignField: '_id',
            as: 'atraccion'
        }
    },
    { $unwind: '$atraccion' },
    {
        $group: {
            _id: '$atraccion._id',
            nombre: { $first: '$atraccion.nombre' },
            nombreDepartamento: { $first: '$atraccion.nombreDepartamento' }
        }
    },
    {
        $project: {
            _id: 0,
            atraccionTuristicaId: '$_id',
            nombre: 1
        }
    }
])

// ranking atracciones
use('turismoBolivia')
db.atraccionesTuristicas.aggregate([
    {
        $lookup: {
            from: "comentarios",
            localField: "_id",
            foreignField: "atraccionTuristicaId",
            as: "comentarios"
        }
    },
    {
        $addFields: {
            promedioCalificacion: { $avg: "$comentarios.calificacion" }
        }
    },
    {
        $sort: {
            promedioCalificacion: -1
        }
    }
]).toArray();