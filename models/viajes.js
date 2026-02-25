import sequelize from 'sequelize'
import dataBase from '../config/db.js'

export const viajes = dataBase.define('viajes',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    titulo:{
        type: sequelize.STRING
    },
    precio:{
        type: sequelize.STRING
    },
    fecha_ida:{
        type: sequelize.DATE
    },
    fecha_vuelta:{
        type: sequelize.DATE
    },
    imagen:{
        type: sequelize.STRING
    },
    descripcion:{
        type: sequelize.STRING
    },
    disponibles:{
        type: sequelize.INTEGER
    },
    slug:{
        type: sequelize.STRING
    }
})
