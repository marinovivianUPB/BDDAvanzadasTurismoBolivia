/**PRIMER DATA LAKE*/
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
            from: 'usuarios',
            localField: 'comentarios.usuarioId',
            foreignField: '_id',
            as: 'usuarioComentario'
        }
    },
    { $unwind: '$usuarioComentario' },
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
        $group: {
            _id: {
                atraccion: '$_id',
                comentario: '$comentarios._id'
            },
            respuestas: { $addToSet: {
                usuario: "$usuarioRespuesta",
                texto: "$respuestas.texto",
                timestamp: "$respuestas.timestamp"
            }},
            calificacion: { $first: '$comentarios.calificacion' },
            usuario:{$first: "$usuarioComentario"},
            texto: { $first: '$comentarios.texto' }
        }
    },{
        $group:{
            _id:"$_id.atraccion",
            calificacionPromedio:{
                $avg: "$calificacion"
            },
            comentarios:{
                $addToSet: {
                    usuario:"$usuario",
                    calificacion:"$calificacion",
                    texto:"$texto",
                    timestamp:"$timestamp",
                    respuestas:"$respuestas"
                }
            }
        }
    },{
        $out: "dataLakeNoSQL"
    }
])

/**SEGUNDO DATA LAKE*/
use('turismoBolivia')
db.usuarios.aggregate([
    {
        $lookup: {
            from: 'comentarios',
            localField: '_id',
            foreignField: 'usuarioId',
            as: 'comentarios'
        }
    },
    { $unwind: '$comentarios' },
    {
        $lookup: {
            from: 'atraccionesTuristicas',
            localField: 'comentarios.atraccionTuristicaId',
            foreignField: '_id',
            as: 'atraccion'
        }
    },
    { $unwind: '$atraccion' },
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
        $group: {
            _id: {
                usuario: '$_id',
                comentario: '$comentarios._id'
            },
            usuarioId:{$first: "$usuarioId"},
            respuestas: { $addToSet: {
                usuario: "$usuarioRespuesta",
                texto: "$respuestas.texto",
                timestamp: "$respuestas.timestamp"
            }},
            nombre:{$first: "$nombre"},
            apellido:{$first: "$apellido"},
            residencia:{$first: "$residencia"},
            timestamp:{$first: "$timestamp"},
            calificacion: { $first: '$comentarios.calificacion' },
            atraccion:{$first: "$atraccion"},
            texto: { $first: '$comentarios.texto' },
            timestampComentario:{ $first: '$comentarios.timestamp' }
        }
    },{
        $group:{
            _id:"$_id.usuario",
            nombre:{$first: "$nombre"},
            apellido:{$first: "$apellido"},
            residencia:{$first: "$residencia"},
            timestamp:{$first: "$timestamp"},
            comentarios:{
                $addToSet: {
                    calificacion:"$calificacion",
                    texto:"$texto",
                    timestamp:"$timestampComentario",
                    respuestas:"$respuestas",
                    atraccion:"$atraccion",
                }
            }
        }
    },{
        $out: "dataLakeNoSQL2"
    }
])

/**mongoexport --collection=dataLakeNoSQL --db=turismoBolivia --jsonArray --out=dataLakeNoSQL.json -u admin -p password123 --authenticationDatabase admin */
/**docker cp mongodbturismo:/dataLakeNoSQL.json ./jsonsBigData */