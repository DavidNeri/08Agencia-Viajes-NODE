import sequelize from 'sequelize';
import dataBase from '../config/db.js'

export const testimonios = dataBase.define('testimonios',{
    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: sequelize.STRING
    },
    correo:{
        type: sequelize.STRING
    },
    testimonio:{
        type: sequelize.STRING
    }
})
