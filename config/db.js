import Sequelize from 'sequelize'

const dataBase = new Sequelize('test','root','',{
    dialect: 'mysql',
    host:'localhost',
    port:3306,
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