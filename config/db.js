import Sequelize from 'sequelize'

const database_url = 'mysql://AgenciaViajesNode_footballof:33bb0efbb3adadf602452d19b538bfbeff57af84@y1g5ql.h.filess.io:61002/AgenciaViajesNode_footballof'

const AGENCIADB = process.env.AGENCIADB;
const dataBase = new Sequelize(AGENCIADB || database_url,{
    define: {
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle:10000  
    },
    operatorAliases: false
});

export default dataBase